import { useState } from "react";
import React from "react";
const Lists = ({ setShowLists, languagesList }) => {
  const [lookLang, setLookLang, values] = useState("");
  const handleClick = (e) => {
    setShowLists(null);
  };
  const handleChange = (e) => {
    setLookLang(e.target.value);
  };
  console.log(lookLang);
  return (
    <div className="language-list">
      <div className="lookup-bar">
        <input value={lookLang} onChange={handleChange} />
        <button className="back-button" onClick={() => setShowLists(null)}>
          Back
        </button>
      </div>
      <div className="Unordered-lang-list">
        <ul>
          {languagesList.map((LanguageList, code) => (
            <li onClick={handleClick}>{LanguageList}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Lists;
