'use client';

import React from "react";
import { useLanguage } from '../i18n/LanguageContext';

const LangSelect = ({ label, state, setter, availableLanguages = [] }) => {
    const { translate } = useLanguage();
    
    const handleRadioChange = (value) => {
        setter(value);
    };

    // If no languages are available yet, show the original hardcoded options
    const languages = availableLanguages.length > 0 ? availableLanguages : ["English", "Ukrainian", "Russian"];

    return (
        <div className="lang-selector">
            <h3 className="lang-label">{label}</h3>
            <div>
                {languages.map((language) => (
                    <div className="radio-option" key={language}>
                        <input
                            type="radio"
                            value={language}
                            checked={state === language}
                            onChange={() => handleRadioChange(language)}
                        />
                        <label>{translate(`langName${language.substring(0, 2).toUpperCase()}`)}</label>
                    </div>
                ))}

            {/*
            <div className="radio-option">
                <input
                    type="radio"
                    value="English"
                    checked={state === "English"}
                    onChange={() => handleRadioChange("English")}
                />
                <label>{translate('langNameEN')}</label>
            </div>
            <div className="radio-option">
                <input
                    type="radio"
                    value="Ukrainian"
                    checked={state === "Ukrainian"}
                    onChange={() => handleRadioChange("Ukrainian")}
                />
                <label>{translate('langNameUK')}</label>
            </div>
            <div className="radio-option">
                <input
                    type="radio"
                    value="Russian"
                    checked={state === "Russian"}
                    onChange={() => handleRadioChange("Russian")}
                />
                <label>{translate('langNameRU')}</label>
            </div>
            */}

            </div>
        </div>
    );
};

export default LangSelect;