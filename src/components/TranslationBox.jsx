'use client';
import { useState } from "react";
import { useLanguage } from '../i18n/LanguageContext';
import { TranslationParserMock } from "../TranslationMock/translateMock";

function fetchData() {

}

function TranslateBox(outputTranslation, outputSource, outputMarkReview) {
    const { translate } = useLanguage();
    
    
    const style = `
    #translate-box {
        display: flex;
        flex-direction: column;
        align-items: center;
        border: 1px solid #ccc;
        border-radius: 1em;
        background-color: #fff;
        padding: 1em;
        width: 100%;
    }

    #output-text {
        font-size: 1em;
        padding: 0.75em 1em;
        width: 100%;
        border: none;
        border-radius: 1em;
        overflow-y: scroll;
        max-height: 10em;
        font-family: Open Sans, sans-serif;
        line-height: 1.5;
        color: #333;
        text-align: left;
    }
    `;

    return (
        <div id="translation-output">            
            <div id="translate-box" style={{ borderRadius: '0.5em', padding: '1em' }}>
                <style>
                    {style}
                </style>
                
                <div style={{ display: outputSource && outputMarkReview ? '' : 'none', textAlign: 'center'}}>
                  <span>
                    <b>Output: </b>{outputTranslation}
                  </span>
                  <br />
                  <span><b>Source:</b> {outputSource}</span>
                  <br />
                  
                  <span>
                    {outputMarkReview ? (
                      <a
                        href={outputMarkReview}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          color: 'blue',
                          textDecoration: 'underline',
                          ':hover': { backgroundColor: 'lightblue' }
                        }}
                      >
                        Translation needs to be reviewed form
                      </a>
                    ) : (
                      <span style={{ color: 'grey' }}>
                        Translation needs to be reviewed form
                      </span>
                    )}
                  </span>
                </div>
            </div>
        </div>
    );

}
    
export default TranslateBox;
          

