export const parseTranslationData = (data) => {
    const translationData = {};
    data.results.forEach((result) => {
        const {en_name, uk_name, ru_name} = result;
        translationData[en_name] = {uk: uk_name, ru: ru_name};
        translationData[uk_name] = {en: en_name, ru: ru_name};
        translationData[ru_name] = {en: en_name, uk: uk_name};
    });
    return translationData;
};
