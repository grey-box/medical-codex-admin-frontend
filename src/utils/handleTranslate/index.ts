const handleTranslate = async (
  selectedMedicine: object,
  targetLanguage: string,
  setOutputTranslation: (translation: string) => void,
  NEXT_PUBLIC_API_URL: string | undefined,
): Promise<string | null> => {
  try {
    const languageMapping: { [key: string]: string } = {
      English: "en",
      Ukrainian: "uk",
      Russian: "ru",
      French: "fr",
    };
    const targetLanguageCode = languageMapping[targetLanguage];
    if (!targetLanguageCode) {
      console.error(`Invalid target language: ${targetLanguage}`);
      return null;
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
      console.error(`HTTP error! Status: ${response.status}`);
      return null;
    }
    const dataFromServer = await response.json();
    console.log("Response from Server:", dataFromServer);
    const firstResult = dataFromServer.results?.[0];
    if (firstResult) {
      setOutputTranslation(firstResult.translated_name);
      return firstResult.translated_name;
    } else {
      console.error("No translation results available.");
      return null;
    }
  } catch (error) {
    console.error("Error in handleTranslate function:", error);
    return null;
  }
};

export default handleTranslate;
