'use client';

import "../../public/styles/page.css";
import LangSelect from "../components/LangSelect.jsx"
import SearchBox from "../components/SearchBox.jsx"
import Navbar from "../components/Navbar.jsx"
import Footer from "../components/Footer.jsx"
import { useLanguage } from '../i18n/LanguageContext';
import { useState } from "react";

const API_URL = process.env.NEXT_PUBLIC_API_URL

export default function Home() {

  const [
    selectedLangSource,
    setSelectedLangSource,
  ] = useState("English");

  const [
    selectedLangTarget,
    setSelectedLangTarget,
  ] = useState("Ukrainian");

  const [
    selectedWord,
    setSelectedWord,
  ] = useState("");

  const { translate, language, setLanguage } = useLanguage();

  return (
    <>
      <main id="main">
        <Navbar/>
        <form id="translation-form">
          <div id="lang-selectors">
            {LangSelect("Source Language", selectedLangSource, setSelectedLangSource)}
            {LangSelect("Target Language", selectedLangTarget, setSelectedLangTarget)}
          </div>
          {SearchBox(selectedWord, setSelectedWord, selectedLangSource, selectedLangTarget, API_URL)}
          <button id="translate-button" disabled >{translate('translate')}</button>
          <label id="output-label">{translate('output')}</label>
        </form>
      </main>
    </>
  );
}
