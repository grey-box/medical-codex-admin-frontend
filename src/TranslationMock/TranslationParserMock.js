import translationData from './TranslationTestData.json';

export const parseTranslationData = (data = translationData) => {
    const result = {};
    data.results.forEach((result) => {
        const {en_name, uk_name, ru_name} = result;
        result[en_name] = {uk: uk_name, ru: ru_name};
        result[uk_name] = {en: en_name, ru: ru_name};
        result[ru_name] = {en: en_name, uk: uk_name};
    });
    return result;
};
