'use client';

import "../../public/styles/page.css";
import LangSelect from "../components/LangSelect.jsx"
import SearchBox from "../components/SearchBox.jsx"
import TranslateBox from "../components/TranslationBox.jsx"
import fetchData from "../components/TranslationBox.jsx"
import Navbar from "../components/Navbar.jsx"
import Footer from "../components/Footer.jsx"
import { useLanguage } from '../i18n/LanguageContext';
import {useEffect, useState} from "react";
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

  const [availableLanguages, setAvailableLanguages] = useState({
    sourceLanguages: [],
    targetLanguages: []
  });
  const { translate, language, setLanguage } = useLanguage();

  useEffect(() => {
    let isMounted = true;

    const fetchLanguages = async () => {
      try {
        const response = await fetch(`${API_URL}/languages`);
        const data = await response.json();

        if (isMounted) {
          const sourceLanguages = [...new Set(data.translations.map(pair => pair.source_language))];
          const targetLanguages = [...new Set(data.translations.map(pair => pair.target_language))];

          setAvailableLanguages({
            sourceLanguages,
            targetLanguages
          });
        }
      } catch (error) {
        console.error('Error fetching languages:', error);
      }
    };

    fetchLanguages().catch(console.error);

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <>
      <Navbar/>
      <main id="main">
        <form id="translation-form">
          <div id="lang-selectors-container">
            <div id="lang-selectors">
              <LangSelect
                  label="Source Language"
                  state={selectedLangSource}
                  setter={setSelectedLangSource}
                  availableLanguages={availableLanguages.sourceLanguages}
              />
              <LangSelect
                  label="Target Language"
                  state={selectedLangTarget}
                  setter={setSelectedLangTarget}
                  availableLanguages={availableLanguages.targetLanguages}
              />
            </div>
          </div>

          <SearchBox selectedLangSource={selectedLangSource} apiUrl={API_URL} setInputSearch={setInputSearch} />

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
          {TranslateBox(outputTranslation, outputSource, outputMarkReview)}
        </form>
      </main>
    </>
  );
}
