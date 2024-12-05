'use client';

import {createContext, useContext, useEffect, useState} from 'react';
import {translations} from './translations';

const LanguageContext = createContext();

/**
 * LanguageProvider is a React component that manages and provides the current language context
 * to its children. It detects the user's preferred language and updates the context accordingly.
 * The component also provides a translation function that retrieves translations for a given key
 * in the current language, defaulting to English if the key is not found.
 *
 * @param {Object} props - The component props.
 * @param {ReactNode} props.children - The child components that will have access to the language context.
 */
export function LanguageProvider({children}) {
    const [language, setLanguage] = useState('en');

    useEffect(() => {
        // Detect user's language on client side
        const detectLanguage = () => {
            const browserLang = navigator.language.split('-')[0];
            return translations[browserLang] ? browserLang : 'en';
        };

        setLanguage(detectLanguage());
    }, []);

    const translate = (key) => {
        return translations[language][key] || translations['en'][key] || key;
    };

    return (
        <LanguageContext.Provider value={{language, setLanguage, translate}}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    return useContext(LanguageContext);
}