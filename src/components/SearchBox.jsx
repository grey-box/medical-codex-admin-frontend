'use client';
import { useState } from "react";
import { useLanguage } from '../i18n/LanguageContext';
import { handleFuzzy } from "../utils/FuzzyMatching";


function SearchBox(source, target, API_URL) {
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
            width: 10em;
            margin: 2em;
        }

        #search-box {
            font-size: .75em;
            padding: .5em 1em;
            width: 100%;
            border: none;
            border-radius: 1em;
        }

        #dropdown-content {
            display: none;
            position: absolute;
            font-size: .75em;
            color: black;
            list-style: none;
            max-height: 5em;
            width: inherit;
            z-index: 2;
            overflow-y: scroll;
            width: inherit;
            background-color: var(--foreground);
            border-radius: 0px 0px 1em 1em;
        }
        
        #dropdown-content li {
            padding: .5em 1em;
        }

        #dropdown-content li:hover {
            background-color: var(--accent);
            color: var(--foreground)
        }

        #search:hover  #dropdown-content{
            display: block !important;
        }

        #search:hover #search-box {
            border-radius: 1em 1em 0px 0px;
            outline: none;
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
          