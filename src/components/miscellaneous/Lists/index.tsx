import { useState, FC } from "react";

interface ListsProps {
  setShowLists: (show: null) => void;
  languagesList: string[];
}

const Lists: FC<ListsProps> = ({ setShowLists, languagesList }) => {
  const [lookLang, setLookLang] = useState("");

  const handleClick = () => {
    setShowLists(null);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLookLang(e.target.value);
  };

  console.log(lookLang);

  return (
    <div className="language-list">
      <div className="lookup-bar">
        <input value={lookLang} onChange={handleChange} />
        <button className="back-button" onClick={handleClick}>
          Back
        </button>
      </div>
      <div className="Unordered-lang-list">
        <ul>
          {languagesList.map((LanguageList, index) => (
            <li key={index} onClick={handleClick}>
              {LanguageList}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Lists;
