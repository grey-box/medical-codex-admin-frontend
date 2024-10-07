'use client';

import "./styles/page.css";
import LangSelect from "./components/LangSelect.jsx"
import SearchBox from "./components/SearchBox.jsx"
import Navbar from "./components/Navbar.jsx"
import Footer from "./components/Footer.jsx"


export default function Home() {
  return (
    <>
      <main id="main">
        <Navbar />
        <form id="translation-form">
          <div id="lang-selectors">
            {LangSelect("Source Language")}
            {LangSelect("Target Language")}
          </div>
          <SearchBox/>
          <button id="translate-button">Translate</button>
          <label id="output-label">Output</label>
        </form>
        
      </main>
    </>
  );
}




