'use client';

import React, {useEffect, useState} from "react";
import {useLanguage} from '../i18n/LanguageContext';

/**
 * The Navbar component renders a navigation bar with links to the main pages
 * of the site and a language selection dropdown. It also displays the
 * selected language.
 *
 * The component uses the useLanguage hook to retrieve the current language
 * and the translate function to translate the links.
 *
 * It also defines a state variable selectedLang to keep track of the
 * currently selected language and sets it to the current language when the
 * component mounts or when the language is changed.
 *
 * The component renders a dropdown list of languages with flags and names.
 * When a language is selected, it calls the handleSelection function which
 * sets the current language and updates the selectedLang state.
 *
 * @param {string} label - The label for the navigation bar.
 * @returns A JSX element representing the navigation bar.
 */
function Navbar(label) {
    const {translate, language, setLanguage} = useLanguage();

    const langIcons = {
        "en": {
            name: "English",
            icon: "/images/icon-great-britain.png"
        },
        "uk": {
            name: "українська",
            icon: "/images/icon-ukraine.png"
        },
        "ru": {
            name: "Русский",
            icon: "/images/icon-russia.png"
        }
    };

    const [selectedLang, setSelectedLang] = useState(language);

    useEffect(() => {
        setSelectedLang(language);
    }, [language]);

    const handleSelection = (langCode) => {
        setSelectedLang(langCode);
        setLanguage(langCode);
    };

    return (
        <nav id="navbar">
            <img id="logo" src="/images/logoGREY-BOX.jpg" alt="Grey-box logo"/>
            <div id="nav-links">
                <a className="nav-link" href="/">{translate('home')}</a>
                <a className="nav-link" href="/about">{translate('about')}</a>
                <a className="nav-link" href="/help">{translate('help')}</a>
            </div>
        </nav>
    );
}

export default Navbar;