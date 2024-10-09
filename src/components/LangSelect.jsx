'use client';

import React, { useState } from "react";
import { useLanguage } from '../i18n/LanguageContext';

function LangSelect(label, state, setter) {
    const { translate } = useLanguage();
    
    const handleRadioChange = (value) => {
        setter(value);
    };

    const style = `
        .radio-option {
            display: flex;
            margin: .5em;
        }
        .radio-option input {
            margin: .5em;
        }
        .radio-option label {
            font-style: italic;
        }
    `;
    return (
    <div className="lang-selector">
        <style>
            {style}
        </style>
        <h3>{label}</h3>
        <div>
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
        </div>
    </div>
    );
}
  
export default LangSelect;
  