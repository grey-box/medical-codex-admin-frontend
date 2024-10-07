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
            width: 100%;
            top: 0;
            height: 3em;
            background-color: grey;
            z-index: 1;
        }
        #logo {
            height: 3em;
            width: 3em;
            float: left;
        }
        #nav-links {
            float: left;
        }
        .nav-link {
            float: left;
            display: block;
            text-align: center;
            text-decoration: none;
            padding: .8em;
            font-weight: 500;
        }
        .nav-link:hover {
            background-color: var(--accent);
        }
        #lang-picker {
            float: right;
            position: relative;
            width: 8 em;
        }
        #lang-selected-img {
            height:2em;
            width 2em;
        }
        #lang-selected {
            display:flex;
            align-items: center;
            padding: .5em;
        }
        #lang-arrow {
            height: 1em;
            width: 1em;
        }
        #lang-selected:hover #lang-selected-img {
            border: .1em solid white !important;
            border-radius: 1em;
        }
        #lang-dropdown {
            display: none;
            position: absolute;
            background-color: grey;
            flex-direction: column;
            
        }
        #lang-picker:hover #lang-dropdown {
            display: flex;
        }
        .lang-img {
            height: 2em;
            width: 2em;
        }
        .lang-select {
            padding: .5em;
            display: inline-flex;
            align-items: center;
        }
        .lang-select:hover .lang-img{
            border: .1em solid white !important;
            border-radius: 1em;
        }
    `;

    return (
    <nav id="navbar">
        <style>
            {style}
        </style>
        <img id="logo" src="/images/logoGREY-BOX.jpg" alt="Grey-box logo"></img>
        <div id="nav-links">
            <a className="nav-link" href="#">{translate('home')}</a>
            <a className="nav-link" href="#">{translate('about')}</a>
            <a className="nav-link" href="#">{translate('help')}</a>
        </div>
        <div id="lang-picker">
            <div id="lang-selected">
                <img
                    src={langIcons[selectedLang].icon}
                    id="lang-selected-img"
                    alt={langIcons[selectedLang].name}
                />
                <label>{langIcons[selectedLang].name}</label>
                <img src="/images/icons-expand-arrow.png" id="lang-arrow" alt="Expand"/>
            </div>
            <div id="lang-dropdown">
                {Object.entries(langIcons).map(([code, {name, icon}]) =>
                    code !== selectedLang ? (
                        <div
                            key={code}
                            className="lang-select"
                            onClick={() => handleSelection(code)}
                        >
                            <img src={icon} className="lang-img" alt={name}/>
                            <label>{name}</label>
                        </div>
                    ) : null
                )}
            </div>
        </div>
    </nav>
    );
}
export default Navbar;
