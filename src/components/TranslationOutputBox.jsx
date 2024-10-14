'use client';
import { useState } from "react";
import { useLanguage } from '../i18n/LanguageContext';
import { TranslationParserMock } from "../utils/TranslationParserMock";

function TranslateBox(source, target) {
    const { translate } = useLanguage();
    
    const [
        translation,
        setTranslation,
    ] = useState(TranslationParserMock[source][target] || '');

    const inputChangedHandler = (value) => {
        const newTranslation = TranslationParserMock[source][target].find(
            (translation) => translation.includes(value.target.value)
        );
        setTranslation(newTranslation || '');
    }

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
            <p className="output-placeholder">{translate('outputPlaceholder')}</p>
            <div id="output-text" className="output-text">
                <p>{translation}</p>
            </div>
        </div>
    );

}
    
export default TranslateBox;
          

