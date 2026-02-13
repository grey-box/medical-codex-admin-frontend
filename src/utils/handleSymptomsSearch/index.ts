const handleSymptomsSearch = async (
  inputSearch: string,
  sourceLanguage: string,
  setSymptoms: (data: Array<{
    matching_algorithm: string,
    matching_name: string,
    matching_row_number: number,
    matching_source: number,
    matching_uid: number,
  }>) => void,
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
    console.log("Symptoms search parameters:", requestBody);

    const response = await fetch(`${NEXT_PUBLIC_API_URL}/symptoms-search/`, {
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
    console.log("Received symptoms data:", data);

    if (data.results.length === 0) {
      setSearchError("No symptoms found.");
      setSymptoms([]);
    } else {
      setSymptoms(data.results);
      setSearchError(null);
    }
  } catch (error) {
    console.error("Symptoms search error:", error);
    setSearchError("Symptoms search failed.");
    setSymptoms([]);
  }
};

export default handleSymptomsSearch;