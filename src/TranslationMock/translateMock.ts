import translationData from './TranslationTestData.json';


const translateMock = async (
    inputSearch: string,
    selectedLangSource: string,
    selectedLangTarget: string,
    setOutputTranslation: (translation: string) => void,
    setOutputSource: (translation: string) => void,
    setOutputMarkReview: (translation: string) => void
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
      json.results.forEach((result) => {
          const {en_name, uk_name, ru_name, source} = result;
          var outputTranslation;
          


          if (selectedLangSource === 'English' && selectedLangTarget === 'Ukrainian' && inputSearch === en_name) {
            setOutputTranslation(uk_name);
            setOutputSource(source);
            setOutputMarkReview("https://docs.google.com/forms/d/e/1FAIpQLSfdhz9kvQhP6tburx6ojvC051z1xY9we02lzB67vjAB_ttqZw/viewform?usp=pp_url" + "&entry.169601347=" + selectedLangSource + "&entry.868583717=" + inputSearch + "&entry.377140004=" + selectedLangTarget + "&entry.600267019=" + uk_name);

          } else if (selectedLangSource === 'English' && selectedLangTarget === 'Russian' && inputSearch === en_name) {
            setOutputTranslation(ru_name);
            setOutputSource(source);
            setOutputMarkReview("https://docs.google.com/forms/d/e/1FAIpQLSfdhz9kvQhP6tburx6ojvC051z1xY9we02lzB67vjAB_ttqZw/viewform?usp=pp_url" + "&entry.169601347=" + selectedLangSource + "&entry.868583717=" + inputSearch + "&entry.377140004=" + selectedLangTarget + "&entry.600267019=" + ru_name);

          } else if (selectedLangSource === 'Ukrainian' && selectedLangTarget === 'English' && inputSearch === uk_name) {
            setOutputTranslation(en_name);
            setOutputSource(source);
            setOutputMarkReview("https://docs.google.com/forms/d/e/1FAIpQLSfdhz9kvQhP6tburx6ojvC051z1xY9we02lzB67vjAB_ttqZw/viewform?usp=pp_url" + "&entry.169601347=" + selectedLangSource + "&entry.868583717=" + inputSearch + "&entry.377140004=" + selectedLangTarget + "&entry.600267019=" + en_name);

          } else if (selectedLangSource === 'Ukrainian' && selectedLangTarget === 'Russian' && inputSearch === uk_name) {
            setOutputTranslation(ru_name);
            setOutputSource(source);
            setOutputMarkReview("https://docs.google.com/forms/d/e/1FAIpQLSfdhz9kvQhP6tburx6ojvC051z1xY9we02lzB67vjAB_ttqZw/viewform?usp=pp_url" + "&entry.169601347=" + selectedLangSource + "&entry.868583717=" + inputSearch + "&entry.377140004=" + selectedLangTarget + "&entry.600267019=" + ru_name);

          } else if (selectedLangSource === 'Russian' && selectedLangTarget === 'English' && inputSearch === ru_name) {
            setOutputTranslation(en_name);
            setOutputSource(source);
            setOutputMarkReview("https://docs.google.com/forms/d/e/1FAIpQLSfdhz9kvQhP6tburx6ojvC051z1xY9we02lzB67vjAB_ttqZw/viewform?usp=pp_url" + "&entry.169601347=" + selectedLangSource + "&entry.868583717=" + inputSearch + "&entry.377140004=" + selectedLangTarget + "&entry.600267019=" + en_name);

          } else if (selectedLangSource === 'Russian' && selectedLangTarget === 'Ukrainian' && inputSearch === ru_name) {
            setOutputTranslation(uk_name);
            setOutputSource(source);
            setOutputMarkReview("https://docs.google.com/forms/d/e/1FAIpQLSfdhz9kvQhP6tburx6ojvC051z1xY9we02lzB67vjAB_ttqZw/viewform?usp=pp_url" + "&entry.169601347=" + selectedLangSource + "&entry.868583717=" + inputSearch + "&entry.377140004=" + selectedLangTarget + "&entry.600267019=" + uk_name);

          }

        //   if (outputTranslation != null) {
        //     setOutputTranslation(outputTranslation + "\n" + source);
        //   } 


      })
      
  };
  
  export default translateMock;
  


