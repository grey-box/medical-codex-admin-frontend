import React from "react";
import { useState } from "react";
const TextBox = ({
  selectedLanguage,
  languagesList,
  style,
  setInputText,
  value,
  outputvalue,
  setShowLists,
}) => {
  return (
    <div className={style}>
      <div className="textbox-parent">
        <div className="textbox-child1">
          <select>
            {languagesList.map((names, index) => (
              <option value={index}>{names}</option>
            ))}
          </select>
        </div>

        <div className="textbox-child2">
          {/*<input value={selectedLanguage}/>*/}
          <button
            className="selection-button"
            onClick={() => setShowLists(style)}
          >
            List
          </button>
        </div>
      </div>
      <br />
      {/* Spacing a gap between the dropdown and textbox */}
      {style == "output" ? (
        <textarea
          value={outputvalue}
          placeholder={style == "input" ? "Enter Text" : "After Translation"}
          disabled={style == "output"}
        />
      ) : (
        <textarea
          //value={style == 'output' ? outputvalue : value}
          placeholder={style == "input" ? "Enter Text" : "After Translation"}
          onChange={(e) => setInputText(e.target.value)}
        />
      )}
    </div>
  );
};

export default TextBox;
