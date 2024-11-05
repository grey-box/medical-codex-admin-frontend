import translationData from './TranslationTestData.json';


const translateMock = async (
    inputSearch: string,
    selectedLangSource: string,
    selectedLangTarget: string,
    setOutputTranslation: (translation: string) => void,
  ): Promise<void> => {
      // Not implemented yet
      console.log(inputSearch)
      // const response = await fetch('./TranslationTestData.json');
      // const json = await response.json();
      setOutputTranslation("");
      const json = translationData
      console.log(selectedLangSource)
      json.results.forEach((result) => {
          const {en_name, uk_name, ru_name} = result;
          if (selectedLangSource === 'English' && selectedLangTarget === 'Ukrainian' && inputSearch === en_name) {
              setOutputTranslation(uk_name);
          } else if (selectedLangSource === 'English' && selectedLangTarget === 'Russian' && inputSearch === en_name) {
              setOutputTranslation(ru_name);
          } else if (selectedLangSource === 'Ukrainian' && selectedLangTarget === 'English' && inputSearch === uk_name) {
              setOutputTranslation(en_name);
          } else if (selectedLangSource === 'Ukrainian' && selectedLangTarget === 'Russian' && inputSearch === uk_name) {
              setOutputTranslation(ru_name);
          } else if (selectedLangSource === 'Russian' && selectedLangTarget === 'English' && inputSearch === ru_name) {
              setOutputTranslation(en_name);
          } else if (selectedLangSource === 'Russian' && selectedLangTarget === 'Ukrainian' && inputSearch === ru_name) {
              setOutputTranslation(uk_name);
          }
      })
      
  };
  
  export default translateMock;
  


