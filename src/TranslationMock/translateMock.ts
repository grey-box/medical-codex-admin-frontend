import translationData from './TranslationTestData.json';
const translateMock = async (
    inputSearch: string,
    selectedLangSource: string,
    selectedLangTarget: string,
    setOutputTranslation: (translation: string) => void,
    setOutputSource: (translation: string) => void,
    setOutputMarkReview: (translation: string) => void,
    API_URL: string
  ): Promise<void> => {
      // Not implemented yet
      console.log(inputSearch)
      // const response = await fetch('./TranslationTestData.json');
      // const json = await response.json();
      setOutputTranslation("");
      const json = translationData
      setOutputTranslation("");
      setOutputSource("")
      setOutputMarkReview("");
      console.log(selectedLangSource)

      if (!API_URL) {
        console.error("API URL is not valid");
        return;
    }

      var sourceLanguage;
      if (selectedLangSource === "English") {
        sourceLanguage = "en";
      } else if (selectedLangSource === "Ukrainian") {
        sourceLanguage = "uk";
      } else if (selectedLangSource === "Russian") {
        sourceLanguage = "ru";
      }  

      var targetLanguage;
      if (selectedLangTarget === "English") {
        targetLanguage = "en";
      } else if (selectedLangTarget === "Ukrainian") {
        targetLanguage = "uk";
      } else if (selectedLangTarget === "Russian") {
        targetLanguage = "ru";
      }

      try { 
        console.log(API_URL)
        const response = await fetch(`${API_URL}/translate/`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            source_language: sourceLanguage,
            target_language: targetLanguage,
            translation_query : {
              matching_name: inputSearch,
              matching_source: "",
              matching_uid: 0
            }
          }),
    
        });
    
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
    
        const data = await response.json();
    
        console.log("Received data:", data);
    
        var outputTranslation = data.results.map(match => match.translated_name)
        setOutputTranslation(outputTranslation);
        setOutputSource(data.results.map(match => match.translated_source));
        // add source to google translate form

        var beginLink = "https://docs.google.com/forms/d/e/1FAIpQLSfdhz9kvQhP6tburx6ojvC051z1xY9we02lzB67vjAB_ttqZw/viewform?usp=pp_url&entry.169601347="
        var rest = "Test1&entry.868583717=Test2&entry.377140004=Test3&entry.600267019=Test4"
        setOutputMarkReview(beginLink + selectedLangSource + "&entry.868583717=" + inputSearch + "&entry.377140004=" + selectedLangTarget + "&entry.600267019=" + outputTranslation);

    
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
  
  export default translateMock;
  


