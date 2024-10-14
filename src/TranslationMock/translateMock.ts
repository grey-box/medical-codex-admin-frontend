import translationData from './TranslationTestData.json';
const translateMock = async (
    inputSearch: (translation: string) => void,
    selectedLangSource: string,
    selectedLangTarget: string,
    setOutputTranslation: (translation: string) => void,
  ): Promise<void> => {
      // Not implemented yet
      console.log(inputSearch)
  };
  
  export default translateMock;
// export const parseTranslationData = (data = translationData) => {
//     const result = {};
//     data.results.forEach((result) => {
//         const {en_name, uk_name, ru_name} = result;
//         result[en_name] = {uk: uk_name, ru: ru_name};
//         result[uk_name] = {en: en_name, ru: ru_name};
//         result[ru_name] = {en: en_name, uk: uk_name};
//     });
//     return result;
// };


