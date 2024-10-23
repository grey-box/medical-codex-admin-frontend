'use client';

import React, {useEffect, useState} from "react";
import { useLanguage } from '../i18n/LanguageContext';

function Navbar(label) {
    const { translate, language, setLanguage } = useLanguage();

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
        // Update selected language when context language changes
        setSelectedLang(language);
    }, [language]);

    const handleSelection = (langCode) => {
        setSelectedLang(langCode);
        setLanguage(langCode); // This updates the context language
    };

    const style = `
        #navbar {
            position: fixed;
            top: 0;
            width: 100%;
            height: 3.5em;
            background-color: grey;
            display: flex;
            align-items: center;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Adding shadow */
            padding: 0 2em;
            z-index: 1;
        }
        #logo {
            height: 2.5em;
            width: 2.5em;
            margin-right: 1.5em; /* Added margin for better spacing */
        }
        #nav-links {
            display: flex;
            gap: 1em;
            flex-grow: 1;
        }
        .nav-link {
            font-size: 1.1em;
            text-decoration: none;
            color: white;
            padding: 0.8em;
            transition: background-color 0.3s;
        }
        .nav-link:hover {
            background-color: #4a4a4a; /* Darker background on hover */
        }
        #lang-picker {
            display: flex;
            position: relative;
            align-items: center;
        }
        #lang-selected-img {
            height: 2em;
            width: 2em;
            margin-right: 0.5em;
            transition: border 0.3s;
        }
        #lang-selected:hover #lang-selected-img {
            border: 2px solid white;
            border-radius: 50%;
        }
        #lang-dropdown {
            display: none;
            position: absolute;
            top: 100%;
            right: 0;
            background-color: grey;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            z-index: 10;
            flex-direction: column;
        }
        #lang-picker:hover #lang-dropdown {
            display: flex;
        }
        .lang-select {
            padding: 0.5em;
            display: flex;
            align-items: center;
            cursor: pointer;
            transition: background-color 0.3s;
        }
        .lang-select:hover {
            background-color: #4a4a4a;
        }
        .lang-img {
            height: 2em;
            width: 2em;
            margin-right: 0.5em;
        }
    `;

    return (
    <nav id="navbar">
        <style>
            {style}
        </style>
        <img id="logo" src="/images/logoGREY-BOX.jpg" alt="Grey-box logo"></img>
        <div id="nav-links">
            <a className="nav-link" href="/">{translate('home')}</a>
            <a className="nav-link" href="/about">{translate('about')}</a>
            <a className="nav-link" href="/help">{translate('help')}</a>
        </div>

    </nav>
    );
}
export default Navbar;
