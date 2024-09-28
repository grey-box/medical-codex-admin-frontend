'use client';

import "./styles/page.css";
import LangSelect from "./components/LangSelect.jsx"
import SearchBox from "./components/SearchBox.jsx"


export default function Home() {
  return (
    <main id="main">
      <form id="translation-form">
        <div id="lang-selectors">
          {LangSelect("Source Language")}
          {LangSelect("Target Language")}
        </div>
        <SearchBox/>
        <button id="translate-button">Translate</button>
      </form>
    </main>
  );
}




