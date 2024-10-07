'use client';

import {createContext, useContext, useEffect, useState} from 'react';
import {translations} from './translations';

const LanguageContext = createContext();

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