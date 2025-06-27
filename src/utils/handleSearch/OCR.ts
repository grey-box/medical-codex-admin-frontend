const handleOcrSearch = async (
  uploadFile: File,
  sourceLanguage: string,
  setMedicines: (
    data: Array<{
      matching_algorithm: string;
      matching_name: string;
      matching_row_number: number;
      matching_source: number;
      matching_uid: number;
    }>,
  ) => void,
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
  if (!sourceLanguage) {
    setSearchError(`Invalid source language: ${sourceLanguage}`);
    return;
  }

  const formData = new FormData();
  formData.append("image", uploadFile);
  formData.append("source_language", sourceLanguageCode);

  try {
    const response = await fetch(`${NEXT_PUBLIC_API_URL}/ocrmatching/`, {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      setSearchError(`HTTP error! Status: ${response.status}`);
      return;
    }
    const data = await response.json();
    if (data.results.length === 0) {
      setSearchError("No results found.");
      setMedicines([]);
    } else {
      setMedicines(data.results);
      setSearchError(null);
    }
  } catch (error) {
    console.error("OCR Error:", error);
    setSearchError("Unable to connect to the OCR service.");
  }
};

export default handleOcrSearch;
