import React from "react";

interface TextOutputProps {
  selectedLanguage: string;
  style: string;
  setInputText: (value: string) => void;
  value: string;
  outputvalue: string;
}

const TextOutput: React.FC<TextOutputProps> = ({
  selectedLanguage,
  style,
  setInputText,
  value,
  outputvalue,
}) => {
  const setShowLists = () => {
    // Implementation of setShowLists
  };

  return (
    <div className={style}>
      <div className="select-drop-down" onClick={setShowLists}>
        <input value={selectedLanguage} />
        <button className="selection-button">List</button>
      </div>
      <textarea
        value={style == "output" ? outputvalue : value}
        placeholder={style == "input" ? "Enter Text" : "After Translation"}
        onChange={(e) => setInputText(e.target.value)}
        disabled={style == "output"}
      />
    </div>
  );
};

export default TextOutput;
