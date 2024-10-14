'use client';

import "../../public/styles/page.css";
import LangSelect from "../components/LangSelect.jsx"
import SearchBox from "../components/SearchBox.jsx"
import Navbar from "../components/Navbar.jsx"
import Footer from "../components/Footer.jsx"
import { useLanguage } from '../i18n/LanguageContext';
import { useState } from "react";



const API_URL = "http://192.168.1.2:8000/";

export default function Home() {
  const [
    selectedLangSource,
    setSelectedLangSource,
  ] = useState("English");

  const [
    selectedLangTarget,
    setSelectedLangTarget,
  ] = useState("Ukrainian");

  

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
          <button id="translate-button"  >{translate('translate')}</button>
          <label id="output-label">{translate('output')}</label>

          <div id="translation-output" className="output-container">
            {TranslateBox(selectedLangSource, selectedLangTarget, termTo)}
          </div>
        </form>
      </main>
      <Footer/>
    </>
  );
}
