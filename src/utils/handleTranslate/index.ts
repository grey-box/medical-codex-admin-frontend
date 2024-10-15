const handleTranslate = async (
  selectedMedicine: string,
  targetLanguage: string,
  setOutputTranslation: (translation: string) => void,
  NEXT_PUBLIC_API_URL: string | undefined,
): Promise<void> => {
  try {
    const response = await fetch(`${NEXT_PUBLIC_API_URL}/translate/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: selectedMedicine,
        target_language: targetLanguage,
      }),
    });
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const dataFromServer = await response.json();
    setOutputTranslation(dataFromServer.translated_name);
  } catch (error) {
    console.error("Error in handleTranslate function:", error);
  }
};

export default handleTranslate;
