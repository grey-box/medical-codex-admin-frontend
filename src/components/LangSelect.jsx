'use client';

import React, { useState } from "react";
import { useLanguage } from '../i18n/LanguageContext';

function LangSelect(label, state, setter) {
    const { translate } = useLanguage();
    
    const handleRadioChange = (value) => {
        setter(value);
    };

    const style = `
        .lang-selectors-container {
            display: flex;
            justify-content: space-between;
            width: 100%;
            margin-bottom: 2em;
        }
        .lang-selector {
            display: flex;
            flex-direction: column;
            align-items: start;
            margin-bottom: 1.5em;
            flex: 1;
        }
        .lang-label {
            color: #333;
            font-size: 1.2em;
            font-weight: bold;
        }
        .radio-option {
            display: flex;
            align-items: center;
            margin: 0.5em 0;
        }
        .radio-option input[type="radio"] {
            margin-right: 0.5em;
        }
        .radio-option label {
            font-style: italic;
            cursor: pointer;
        }
        .radio-option input[type="radio"]:hover {
            accent-color: #074fa8;
        }
        .radio-option input[type="radio"]:focus {
            outline: 2px solid #074fa8;
            outline-offset: 2px;
        }
    `;
    return (
    <div className="lang-selector">
        <style>
            {style}
        </style>
        <h3 className="lang-label">{label}</h3>
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
  