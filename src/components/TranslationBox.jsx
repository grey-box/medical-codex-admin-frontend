'use client';
import {useLanguage} from '../i18n/LanguageContext';

function fetchData() {
}

function TranslateBox(outputTranslation, outputSource, outputMarkReview) {
    const {translate} = useLanguage();

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