'use client';

import "../../public/styles/page.css";
import LangSelect from "../components/LangSelect.jsx"
import SearchBox from "../components/SearchBox.jsx"
import TranslateBox from "../components/TranslationBox.jsx"
import fetchData from "../components/TranslationBox.jsx"
import Navbar from "../components/Navbar.jsx"
import Footer from "../components/Footer.jsx"
import { useLanguage } from '../i18n/LanguageContext';
import { useState } from "react";



const API_URL = "";

export default function Home() {
  const [
    selectedLangSource,
    setSelectedLangSource,
  ] = useState("English");

  const [
    selectedLangTarget,
    setSelectedLangTarget,
  ] = useState("Ukrainian");

  // This state is used to store the user's input in the search box
  // It is used to trigger the search function when the user types something in the search box
  const [inputSearch, setInputSearch] = useState("");
  
  // This function is called when the user types something in the search box
  // It updates the state with the user's input
  const handleInputSearch = (e) => {
    setInputSearch(e.target.value);
  };
  

  const { translate, language, setLanguage } = useLanguage();

  return (
    <>
      <main id="main">
        <Navbar/>
        <form id="translation-form">
          <div id="lang-selectors-container">
          <div id="lang-selectors">
            {LangSelect("Source Language", selectedLangSource, setSelectedLangSource)}
            {LangSelect("Target Language", selectedLangTarget, setSelectedLangTarget)}
          </div>
            </div>
          {SearchBox(selectedLangSource, selectedLangTarget, API_URL)}
          <button id="translate-button" onClick={() =>
                translateText(
                  selectedLangSource,
                  selectedLangTarget,
                  inputSearch
                )
              }>{translate('translate')}</button>
          <label id="output-label">{translate('output')}</label>

          <div id="translation-output">            
            {TranslateBox(selectedLangSource, selectedLangTarget)}
          </div>
        </form>
      </main>
      <Footer/>
    </>
  );
}
