'use client';

import "../../public/styles/page.css";
import LangSelect from "../components/LangSelect.jsx"
import SearchBox from "../components/SearchBox.jsx"
import Navbar from "../components/Navbar.jsx"
import Footer from "../components/Footer.jsx"
import { useLanguage } from '../i18n/LanguageContext';


export default function Home() {
  const { translate, language, setLanguage } = useLanguage();
  return (
    <>
      <main id="main">
        <Navbar/>
        <form id="translation-form">
          <div id="lang-selectors">
            {LangSelect("Source Language")}
            {LangSelect("Target Language")}
          </div>
          <SearchBox/>
          <button id="translate-button">{translate('translate')}</button>
          <label id="output-label">{translate('output')}</label>
        </form>
      </main>
    </>
  );
}
