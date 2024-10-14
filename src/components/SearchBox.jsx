'use client';
import { useState } from "react";
import { useLanguage } from '../i18n/LanguageContext';
import { handleFuzzy } from "../utils/FuzzyMatching";
import handleInputSearch from "../app/page";

function SearchBox(source, target, API_URL, setInputSearch) {
    const { translate } = useLanguage();
    
    const [
        fuzzyOutput,
        setFuzzyOutput,
      ] = useState([" "]);

    const [
        selectedWord,
        setSelectedWord,
    ] = useState("");

    const [
        typedWord,
        setTypedWord,
    ] = useState("");

    const inputChangedHandler = (value) => {
        setTypedWord(value.target.value);
        setInputSearch(value.target.value)
        if(typedWord)
            handleFuzzy(typedWord, source, API_URL, setFuzzyOutput);
    }

    const selectionHandler = (value) => {
        setSelectedWord(value);
        document.getElementById("search-box").setAttribute("text", selectedWord);
    }

    const style = `
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
        input[type="radio"] {
            accent-color: #074fa8; /* Color for radio buttons */
            margin-right: 0.5em; /* Spacing between radio button and label */
        }
    `;

    return (
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
    );
}
    
export default SearchBox;
          