const handleSearch = async (
  inputSearch: string,
  targetLanguage: string,
  sourceLanguage: string,
  setMedicines: (data: Array<{ matching_name: string }>) => void,
  NEXT_PUBLIC_API_URL: string | undefined,
): Promise<void> => {
  try {
    const response = await fetch(`${NEXT_PUBLIC_API_URL}/fuzzymatching/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: inputSearch,
        target_language: targetLanguage,
        source_language: sourceLanguage,
      }),
    });
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    console.log("Received data:", data);
    setMedicines(data.results);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

export default handleSearch;
