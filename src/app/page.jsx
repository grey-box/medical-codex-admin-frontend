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
      <main id="main">
        <Navbar/>
        <form id="translation-form">
          <div id="lang-selectors-container">
          <div id="lang-selectors">
            {LangSelect("Source Language", selectedLangSource, setSelectedLangSource)}
            {LangSelect("Target Language", selectedLangTarget, setSelectedLangTarget)}
          </div>
            </div>
          {SearchBox(selectedLangSource, selectedLangTarget, API_URL, setInputSearch)}
          <button type="button" id="translate-button" onClick={() =>
                mockTranslate(
                  inputSearch,
                  selectedLangSource,
                  selectedLangTarget,
                  setOutputTranslation,
                  setOutputSource,
                  setOutputMarkReview
                )
              }>{translate('translate')}</button>
          <label id="output-label">{translate('output')}</label>
          {TranslateBox(outputTranslation, outputSource, outputMarkReview)}
        </form>
      </main>
    </>
  );
}
