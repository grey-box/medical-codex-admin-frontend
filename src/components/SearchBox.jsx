'use client';
import {useState} from "react";
import {useLanguage} from '../i18n/LanguageContext';
import {handleFuzzy} from "../utils/FuzzyMatching";

function SearchBox(source, target, API_URL, setInputSearch) {
    const {translate} = useLanguage();

    const [fuzzyOutput, setFuzzyOutput] = useState([" "]);
    const [selectedWord, setSelectedWord] = useState("");
    const [typedWord, setTypedWord] = useState("");

    const inputChangedHandler = (value) => {
        setTypedWord(value.target.value);
        setInputSearch(value.target.value)
        if (typedWord)
            handleFuzzy(typedWord, source, API_URL, setFuzzyOutput);
    }

    const selectionHandler = (value) => {
        setSelectedWord(value);
        document.getElementById("search-box").setAttribute("text", selectedWord);
    }

    return (
        <div id="search">
            <input
                id="search-box"
                placeholder={translate('searchPlaceholder')}
                type="text"
                defaultValue={selectedWord}
                onChange={e => inputChangedHandler(e)}
            />
            <ul id="dropdown-content">
                {fuzzyOutput.map((item) => (
                    <li
                        key={item}
                        value={item}
                        onClick={() => selectionHandler(item)}
                    >
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default SearchBox;