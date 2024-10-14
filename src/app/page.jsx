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

  const [inputSearch, setInputSearch] = useState("");
  

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

          <div id="translation-output" class="output-container">            
            {TranslateBox(selectedLangSource, selectedLangTarget)}
          </div>
        </form>
      </main>
      <Footer/>
    </>
  );
}
