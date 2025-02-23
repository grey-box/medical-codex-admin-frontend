const handleSearch = async (
  inputSearch: string,
  sourceLanguage: string,
  setMedicines: (data: Array<{ matching_name: string }>) => void,
  NEXT_PUBLIC_API_URL: string | undefined,
  setSearchError: (msg: string | null) => void,
): Promise<void> => {
  const languageMapping: { [key: string]: string } = {
    English: "en",
    Ukrainian: "uk",
    Russian: "ru",
    French: "fr",
  };
  const sourceLanguageCode = languageMapping[sourceLanguage];
  if (!sourceLanguageCode) {
    setSearchError(`Invalid source language: ${sourceLanguage}`);
    return;
  }
  try {
    const requestBody = {
      query: inputSearch,
      source_language: sourceLanguageCode,
    };
    console.log("Request parameters:", requestBody);

    const response = await fetch(`${NEXT_PUBLIC_API_URL}/fuzzymatching/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    });
    if (!response.ok) {
      setSearchError(`HTTP error! Status: ${response.status}`);
      return;
    }
    const data = await response.json();
    console.log("Received data:", data);

    if (data.results.length === 0) {
      setSearchError("No results found.");
      setMedicines([]);
    } else {
      setMedicines(data.results);
      setSearchError(null);
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    setSearchError("Unable to connect to the service. Please try again later.");
  }
};

export default handleSearch;
