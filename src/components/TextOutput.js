const TextBox = ({
  selectedLanguage,
  style,
  setInputText,
  value,
  outputvalue,
}) => {
  return (
    <div className={style}>
      <div className="select-drop-down" onClick={() => setShowLists(style)}>
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

export default TextBox;
