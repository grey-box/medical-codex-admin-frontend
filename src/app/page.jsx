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
import mockTranslate from "../TranslationMock/translateMock";
import React, { FC } from "react";

// Change API URL
const API_URL = process.env.NEXT_PUBLIC_API_URL;

/**
 * Home component renders the main page layout for the translation app.
 * It includes language selection, input for translation, and displays
 * the translated output. The component utilizes several hooks to manage
 * language selection and translation state.
 *
 * The component uses:
 * - useState for managing selected source and target language, input search,
 *   and translation outputs.
 * - useLanguage hook to access language context and translation function.
 *
 * The returned layout includes:
 * - Navbar at the top of the page.
 * - A form containing language selectors, input field for the search term,
 *   and a button to initiate translation.
 * - Displays the translation result in a TranslateBox component.
 */
export default function Home() {
  const [
    selectedLangSource,
    setSelectedLangSource,
  ] = useState("English");

  const [
    selectedLangTarget,
    setSelectedLangTarget,
  ] = useState("Ukrainian");

  // Current input from user for translation
  const [inputSearch, setInputSearch] = useState("");
  
  const [outputTranslation, setOutputTranslation] = useState("");

  const [outputSource, setOutputSource] = useState("");

  const [outputMarkReview, setOutputMarkReview] = useState("");

  const { translate, language, setLanguage } = useLanguage();

  return (
    <>
      <Navbar/>
      <main id="main">
        <form id="translation-form">
          <div id="lang-selectors-container">
          <div id="lang-selectors">
            {LangSelect("Source Language", selectedLangSource, setSelectedLangSource)}
            {LangSelect("Target Language", selectedLangTarget, setSelectedLangTarget)}
          </div>
            </div>
            {SearchBox(selectedLangSource, API_URL, setInputSearch)}
            
          
          <button type="button" id="translate-button" onClick={() =>
                mockTranslate(
                  inputSearch,
                  selectedLangSource,
                  selectedLangTarget,
                  setOutputTranslation,
                  setOutputSource,
                  setOutputMarkReview,
                  API_URL
                )
              }>{translate('translate')}</button>
          {TranslateBox(outputTranslation, outputSource, outputMarkReview)}
        </form>
      </main>
    </>
  );
}
