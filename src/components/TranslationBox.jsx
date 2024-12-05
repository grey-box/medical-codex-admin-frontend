'use client';
import {useLanguage} from '../i18n/LanguageContext';

function fetchData() {
}

/**
 * Renders a box containing the translation output, source and link to review form.
 * 
 * @param {string} outputTranslation - The translated text to be displayed
 * @param {string} outputSource - The source of the translated text (e.g. human, AI, etc.)
 * @param {string} outputMarkReview - The URL to the review form for the translated text
 * @returns {React.ReactElement} - The rendered translation box
 */
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
            <div id="translate-box">
                <div
                    className={outputSource && outputMarkReview ? 'translation-content' : 'translation-content hidden'}>
                  <span>
                    <b>Output: </b>{outputTranslation}
                  </span>
                    <br/>
                    <span><b>Source:</b> {outputSource}</span>
                    <br/>

                    <span>
                    {outputMarkReview ? (
                        <a
                            href={outputMarkReview}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="review-link"
                        >
                            Translation needs to be reviewed form
                        </a>
                    ) : (
                        <span className="review-text-disabled">
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