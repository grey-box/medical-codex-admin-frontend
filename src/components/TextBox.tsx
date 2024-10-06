import React from "react";

interface TextBoxProps {
  languagesList: string[];
  style: "output" | "input";
  setInputText: (value: string) => void;
  outputvalue: string;
  setShowLists: (style: "output" | "input") => void;
}

const TextBox: React.FC<TextBoxProps> = ({
  languagesList,
  style,
  setInputText,
  outputvalue,
  setShowLists,
}) => {
  return (
    <div className={style}>
      <div className="textbox-parent">
        <div className="textbox-child1">
          <select>
            {languagesList.map((names, index) => (
              <option key={index} value={index}>
                {names}
              </option>
            ))}
          </select>
        </div>

        <div className="textbox-child2">
          <button
            className="selection-button"
            onClick={() => setShowLists(style)}
          >
            List
          </button>
        </div>
      </div>
      <br />
      {style === "output" ? (
        <textarea
          value={outputvalue}
          placeholder={style === "output" ? "After Translation" : "Enter Text"}
          disabled={style === "output"}
        />
      ) : (
        <textarea
          placeholder={style === "input" ? "Enter Text" : "After Translation"}
          onChange={(e) => setInputText(e.target.value)}
        />
      )}
    </div>
  );
};

export default TextBox;
