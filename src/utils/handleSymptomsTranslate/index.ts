const handleSymptomsTranslate = async (
    selectedSymptom: object,
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
            translation_query: selectedSymptom,
            target_language: targetLanguageCode,
        };
        console.log("Symptoms translate URL:", `${NEXT_PUBLIC_API_URL}/symptoms-translate/`);
        console.log("Symptoms translate body:", JSON.stringify(requestBody, null, 2));
        
        const response = await fetch(`${NEXT_PUBLIC_API_URL}/symptoms-translate/`, {
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
        console.log("Symptoms translate response:", dataFromServer);
        
        const firstResult = dataFromServer.results?.[0];
        if (firstResult) {
            setOutputTranslation(firstResult.translated_name);
            return firstResult.translated_name;
        } else {
            console.error("No symptoms translation results available.");
            return null;
        }
    } catch (error) {
        console.error("Symptoms translation error:", error);
        return null;
    }
};

export default handleSymptomsTranslate;