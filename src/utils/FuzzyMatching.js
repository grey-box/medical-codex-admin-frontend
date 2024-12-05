/**
 * Fetches fuzzy matching results from the server given input search term, source language, fuzziness threshold, number of results, base API URL, and a callback to set the output results.
 * 
 * @param {string} input - The search term to be translated.
 * @param {string} sourceLanguage - The source language of the input term.
 * @param {number} threshold - The fuzziness threshold for the matching algorithm.
 * @param {number} results - The number of results to be returned.
 * @param {string} API_URL - The base URL of the translation API.
 * @param {function} setFuzzyOutput - Callback to set the output translation result.
 * 
 * @throws Will throw an error if the fetch request fails or if the API URL is invalid.
 */
const handleFuzzy = async (input, sourceLanguage, threshold, results, API_URL, setFuzzyOutput) => {
  
    if (!API_URL) {
        console.error("API URL is not valid");
        return;
    }
  
    try { 
      const response = await fetch(`${API_URL}/fuzzymatching/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          source_language: sourceLanguage,
          query: input,
          threshold : threshold,
          nb_max_results: results
        }),
  
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const data = await response.json();
  
      console.log("Received data:", data);
  
      setFuzzyOutput(data.results.map(match => match.matching_name));
  
    } catch (error) {
  
      if (error instanceof Error) {
        console.error("Error fetching data:", error);
        if (error.name === "TypeError" && error.message === "Failed to fetch") {
          console.error(
            "The server is not responding. Please check your server and try again.",
          );
        } else {
          throw error;
        }
      } else {
        throw error;
      }
    }
  
  };
  
    
  
  export { handleFuzzy };