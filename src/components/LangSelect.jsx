'use client';

import React, { useState } from "react";

function LangSelect(label) {
    const [
        selectedValue,
        setSelectedValue,
    ] = useState("English");

    const handleRadioChange = (value) => {
        setSelectedValue(value);
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
                    checked={selectedValue === "English"}
                    onChange={() => handleRadioChange("English")}
                />
                <label>English</label>
            </div>
            <div className="radio-option">
                <input 
                    type="radio"
                    value="Ukrainian"
                    checked={selectedValue === "Ukrainian"}
                    onChange={() => handleRadioChange("Ukrainian")}
                />
                <label>Ukrainian</label>
            </div>
            <div className="radio-option">
                <input 
                    type="radio"
                    value="Russian"
                    checked={selectedValue === "Russian"}
                    onChange={() => handleRadioChange("Russian")}
                />
                <label>Russian</label>
            </div>
        </div>
    </div>
    );
}
  
export default LangSelect;
  