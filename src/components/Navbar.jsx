'use client';

import React, {useEffect, useState} from "react";
import {useLanguage} from '../i18n/LanguageContext';

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