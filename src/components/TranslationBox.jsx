'use client';
import { useState } from "react";
import { useLanguage } from '../i18n/LanguageContext';
import { TranslationParserMock } from "../TranslationMock/TranslationParserMock";

function fetchData() {
    
}

function TranslateBox(source, target) {
    const { translate } = useLanguage();
    
    
    const style = `
        #output-text {
            font-size: 1em;
            padding: 0.75em 1em;
            width: 100%;
            border: 1px solid #ccc;
            border-radius: 1em;
            background-color: #fff;
            overflow-y: scroll;
            max-height: 10em;
            font-family: 'Open Sans', sans-serif;
            line-height: 1.5;
            color: #333;
            text-align: left;
        }
        
        #output-text p {
            margin: 0;
            padding: 0.5em 0;
        }
    `;

    return (
        <div id="translate-box">
            <style>{style}</style>
            <input
              type="text" 
              id="output-text"
              placeholder="Test"
              // value={}
              readOnly
            />
        </div>
    );

}
    
export default TranslateBox;
          

