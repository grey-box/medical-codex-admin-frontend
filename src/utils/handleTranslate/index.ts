const handleTranslate = async (
  selectedMedicine: string,
  targetLanguage: string,
  setOutputTranslation: (translation: string) => void,
  NEXT_PUBLIC_API_URL: string | undefined,
): Promise<void> => {
  try {
    const languageMapping: { [key: string]: string } = {
      English: "en",
      Ukrainian: "uk",
      Russian: "ru",
      Greek: "gr",
    };
    const targetLanguageCode = languageMapping[targetLanguage];
    if (!targetLanguageCode) {
      throw new Error(`Invalid target language: ${targetLanguage}`);
    }

    const requestBody = {
      translation_query: {
        matching_name: selectedMedicine,
        matching_source: "example_source",
        matching_uid: 1,
      },
      target_language: targetLanguageCode,
    };
    console.log("Request URL:", `${NEXT_PUBLIC_API_URL}/translate/`);
    console.log("Request Body:", JSON.stringify(requestBody, null, 2));
    const response = await fetch(`${NEXT_PUBLIC_API_URL}/translate/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    });
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const dataFromServer = await response.json();
    console.log("Response from Server:", dataFromServer);
    const firstResult = dataFromServer.results?.[0];
    if (firstResult) {
      setOutputTranslation(firstResult.translated_name);
    } else {
      throw new Error("No translation results available.");
    }
  } catch (error) {
    console.error("Error in handleTranslate function:", error);
  }
};

export default handleTranslate;
