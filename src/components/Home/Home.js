import React from 'react';
import './Home.css';
import { useState } from "react";
import SocialMediaIcons from '../SocialMediaIcons/SocialMediaIcons';
import SourceLanguage from '../SourceLanguage/SourceLanguage';
import TargetLanguage from '../TargetLanguage/TargetLanguage';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import { useTheme } from '@emotion/react';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const API_URL = process.env.API_URL;

function Home() {

  const theme = useTheme();
  const [inputSearch, setInputSearch] = useState("");
  const [outputTranslation, setOutputTranslation] = useState("");
  const [medicines, setMedicines] = useState([]);
  const [selectedMedicine, setSelectedMedicine] = useState("");
  const [targetLanguage, setTargetLanguage] = useState("");
  const [sourceLanguage, setSourceLanguage] = useState("");

  const handleMedicineChange = (e) => {
    setSelectedMedicine(e.target.value);
  }


  const handleSearch = async () => {
    try {
      const response = await fetch(`${API_URL}/fuzzymatching/`, {
                         method: 'POST',
                         headers: {
                           'Content-Type': 'application/json',
                         },
                         body: JSON.stringify({
                           query: inputSearch,
                           target_language: targetLanguage,
                           source_language: sourceLanguage,
                         }),
                       });
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log('Received data:', data);
        setMedicines(data.results); 
      } catch (error) {
        console.error('Error fetching data:', error);
      }
  };
  
  const handleTranslate = async () => {
    try {
      const response = await fetch('${API_URL}/translate/', {
                         method: 'POST',
                         headers: {
                           'Content-Type': 'application/json',
                         },
                         body: JSON.stringify({
                           query: selectedMedicine,
                           target_language: targetLanguage,
                         }),
                       });
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const dataFromServer = await response.json();
      setOutputTranslation(dataFromServer.translated_name);
    } catch (error) {
      console.error('Error in handleTranslate function:', error);
    }
  };

  return (
    <div className="home-container">
      <div className="body">
        <div className="background-image"></div>
        <h1 className="source">Source Language</h1>
        <SourceLanguage className="source-dropdown" onLanguageChange={setSourceLanguage} />
        <h1 className="target">Target Language</h1>
        <TargetLanguage className="target-dropdown" onLanguageChange={setTargetLanguage} />
        <div className="word-search-section">
          <div className="word-search">
          <div className="input-column">
            <input
              type="text"
              className="input"
              placeholder="Word to Search"
              value={inputSearch}
              onChange={(e) => setInputSearch(e.target.value)}
            />
          </div>
          <div className="search-button-column">
            <button className="search-button" onClick={handleSearch}>
              Search
            </button>
          </div>
          </div>
          <div className="database-search">
          <h1 className="database-search-results">Database Search Results</h1>
          <div className="output-column">
            <FormControl sx={{ m: 1, width: 300 }}>
                <InputLabel id="medicine-select-label">Medicine</InputLabel>
                <Select
                  labelId="medicine-select-label"
                  id="medicine-select"
                  value={selectedMedicine}
                  onChange={handleMedicineChange}
                  input={<OutlinedInput label="Medicine" />}
                  MenuProps={MenuProps}
            >
              {medicines.map((medicine) => (
                <MenuItem key={medicine.matching_name} value={medicine.matching_name}>{medicine.matching_name}</MenuItem>
            ))}
            </Select>
            </FormControl>
          </div>
        </div>
        </div>
        <div className="translate-section">
          <h1 className="translate-results">Translation Results</h1>
          <div className="translate-button-column">
        <button className="translate-button" onClick={handleTranslate}>
          Translate
        </button>
        </div>
        <div className="output-translation">
            <input
              type="text"
              className="output"
              value={outputTranslation}
              readOnly
            />
          </div>
        </div>
        </div>
        <div className="footer">
          <SocialMediaIcons />
      </div>
    </div>
  );
  
}

export default Home;