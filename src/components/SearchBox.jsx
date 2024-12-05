'use client';
import {useState} from "react";
import {useLanguage} from '../i18n/LanguageContext';
import {handleFuzzy} from "../utils/FuzzyMatching";

/**
 * Renders a search box with fuzzy matching autocompletion and settings panel.
 * 
 * The component renders a text input field that triggers a fuzzy matching
 * search when the user types. The fuzzy matching results are displayed in a
 * dropdown box below the input field. The user can select a result from the
 * dropdown to prefill the input field.
 * 
 * The component also renders a settings panel that allows the user to adjust
 * the number of results and the fuzzy matching accuracy threshold. The panel
 * is initially hidden and can be toggled on and off by clicking on the
 * settings icon.
 * 
 * @param {string} source - The source language for the fuzzy matching search.
 * @param {string} API_URL - The base URL of the translation API.
 * @param {function} setInputSearch - Callback to set the input search term.
 * @returns {React.ReactElement} - The rendered search box component.
 */
function SearchBox(source, API_URL, setInputSearch) {
    const { translate } = useLanguage();


    const [fuzzyOutput, setFuzzyOutput] = useState([" "]);
    const [selectedWord, setSelectedWord] = useState("");
    const [typedWord, setTypedWord] = useState("");

    const [
        showSettings,
        setShowSettings
    ] = useState("none");

    const [
        numberFuzzySettings,
        setNumberFuzzySettings
    ] = useState(5);

    const [
        thresholdFuzzySettings,
        setThresholdFuzzySettings
    ] = useState(5);

    const numberSliderChange = (value) => {
        setNumberFuzzySettings(value);
    }

    const thresholdSliderChange = (value) => {
        setThresholdFuzzySettings(value);
    }

    const inputChangedHandler = (value) => {
        setTypedWord(value.target.value);
        setInputSearch(value.target.value)
        if(typedWord)
            handleFuzzy(typedWord, source, thresholdFuzzySettings, numberFuzzySettings, API_URL, setFuzzyOutput);
    }

    const selectionHandler = (value) => {
        setSelectedWord(value);
        document.getElementById("search-box").setAttribute("text", selectedWord);
    }

    const clickSettings = () => {
        if (showSettings === "none")
            setShowSettings("block");
        else
            setShowSettings("none");
    }

    const style = `
        label {
            color: black;
        }
        #search {
            display: block;
            width: 100%;
            margin: 2em 0;
            position: relative;
        }

        #search-box {
            font-size: 1em;
            padding: 0.75em 1em;
            width: 100%;
            border: 1px solid #ccc;
            border-radius: 1em;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            transition: all 0.3s ease-in-out;
        }
        
        #search-box:focus {
            outline: none;
            border-color: #074fa8;
            box-shadow: 0 0 8px rgba(7, 79, 168, 0.5);
        }

        #dropdown-content {
            display: none;
            position: absolute;
            font-size: 0.9em;
            color: #333;
            list-style: none;
            max-height: 10em;
            width: 100%;
            z-index: 2;
            overflow-y: scroll;
            background-color: #fff;
            border: 1px solid #ccc;  /* Border for dropdown */
            border-radius: 0px 0px 1em 1em;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        
        #dropdown-content li {
            padding: 0.5em 1em;
            cursor: pointer;
        }

        #dropdown-content li:hover {
            background-color: var(--accent);
            color: #fff;
        }

        #search:hover  #dropdown-content{
            display: block !important;
        }

        #search:hover #search-box {
            border-radius: 1em 1em 0px 0px;
        }
        input[type=radio] {
            accent-color: #074fa8; /* Color for radio buttons */
            margin-right: 0.5em; /* Spacing between radio button and label */
        }
        .slider-box {
            display: flex;
            flex-direction: column;
        }
        
    `;

    return (
        <>
        <div id="search-container">
            <div id="search">
                <style>{style}</style>
                <input 
                    id="search-box" 
                    placeholder={translate('searchPlaceholder')} 
                    type="text" 
                    defaultValue={selectedWord}
                    onChange={e =>inputChangedHandler(e)}/>
                <ul id="dropdown-content">
                {fuzzyOutput.map((item) => <li key={item} value={item} onClick={() => selectionHandler(item)}>{item}</li>)}
                </ul>
            </div>
            <a onClick={() => {clickSettings()}}><img src="/images/icon-settings.png"></img></a>
            
        </div>
        <div id="fuzzy-settings" style={{display: showSettings}}>
            <div className="slider-box">
                <label>Number of Results: {numberFuzzySettings}</label>
                <input type="range" min="1" max="10" defaultValue="5" className="slider" onChange={(e) => {numberSliderChange(e.target.value)}}/>
            </div>
            <div className="slider-box">
                <label>Fuzzy Matching Accuracy: {thresholdFuzzySettings}</label>
                <input type="range" min="1" max="10" defaultValue="5" className="slider" onChange={(e) => {thresholdSliderChange(e.target.value)}}/>
            </div>
        </div>
        </>
        
    );
}

export default SearchBox;