import React, { useState } from 'react';
import { Dropdown } from "flowbite-react";
import styles from './Homepage.module.css';

const Home = () => {
  const [sourceLanguage, setSourceLanguage] = useState('English');
  const [targetLanguage, setTargetLanguage] = useState('Russian');
  const [query, setQuery] = useState('');
  const [threshold, setThreshold] = useState(5);
  const [nbMaxResults, setNbMaxResults] = useState(5);
  const [results, setResults] = useState([]);
  const [translationResult, setTranslationResult] = useState(null);
  const [dropdownLabelSource, setDropdownLabelSource] = useState("Select Source Language");
  const [dropdownLabelTarget, setDropdownLabelTarget] = useState("Select Target Language");

  // Language options
  const languageOptions = ['English', 'Russian', 'Ukrainian', 'French', 'Italian', 'Dutch', 'Japanese', 'Chinese', 'Korean', 'Arabic', 'Hindi', 'Arabic', 'Swedish'];

  // Fuzzy matching API call
  const handleFuzzyFetch = async () => {
    const body = {
      source_language: sourceLanguage,
      query,
      threshold,
      nb_max_results: nbMaxResults,
    };

    try {
      const response = await fetch('http://localhost:8000/fuzzymatching/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });

      const data = await response.json();
      setResults(data.results);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  // Translation API call with fallback to last resort if necessary
  const handleTranslationFetch = async (selectedMatch) => {
    const body = {
      translation_query: {
        matching_name: selectedMatch,
        matching_source: sourceLanguage,
      },
      target_language: targetLanguage,
    };

    try {
      const response = await fetch('http://localhost:8000/translate/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });

      const data = await response.json();
      if (data.results && data.results[0]) {
        // Translation found in database
        setTranslationResult(data.results[0]);
      } else {
        // No translation found in database, fallback to lastResort
        console.log("Falling back to last resort translation");
        await handleLastResortTranslation(selectedMatch);
      }
    } catch (error) {
      console.error('Error fetching translation:', error);
      // On error, attempt last resort fallback
      await handleLastResortTranslation(selectedMatch);
    }
  };

  // Last resort API call (Gemini fallback)
  const handleLastResortTranslation = async (selectedMatch) => {
    const body = {
      query: selectedMatch,
      source_language: sourceLanguage,
      target_language: targetLanguage,
    };

    try {
      const response = await fetch('http://localhost:8000/lastresort/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });

      const data = await response.json();
      if (data.translation) {
        setTranslationResult({
          translated_name: data.translation,
          translated_source: targetLanguage,
        });
      } else {
        console.error("No translation found in last resort.");
      }
    } catch (error) {
      console.error('Error fetching last resort translation:', error);
    }
  };

  return (
    <div className="min-h-screen bg-slate-100">
      <div className="container mx-auto rounded-md px-8 py-3">
        <h1 className="text-lg font-bold text-gray-800 dark:text-white">Medication Translation</h1>
        <p className="mt-3 mb-5 text-sm text-gray-600 dark:text-gray-400">Your one-stop solution for accurate drug name matching and translation.</p>
        
        <div className={`${styles.layoutContainer} p-6 bg-white dark:bg-gray-800 rounded-lg`}>
          {/* Left side inputs */}
          <div className={styles.inputSection}>
            <Dropdown label={dropdownLabelSource} data-cy="source-language-dropdown">
              <Dropdown.Header>Select Source Language</Dropdown.Header>
              {languageOptions.map((language) => (
                <Dropdown.Item 
                  key={language} 
                  data-cy={`source-language-option-${language}`}
                  onClick={() => { setSourceLanguage(language); setDropdownLabelSource(language); }}>
                  {language}
                </Dropdown.Item>
              ))}
            </Dropdown>

            <Dropdown label={dropdownLabelTarget} data-cy="target-language-dropdown">
              <Dropdown.Header>Select Target Language</Dropdown.Header>
              {languageOptions.map((language) => (
                <Dropdown.Item 
                  key={language} 
                  data-cy={`target-language-option-${language}`}
                  onClick={() => { setTargetLanguage(language); setDropdownLabelTarget(language); }}>
                  {language}
                </Dropdown.Item>
              ))}
            </Dropdown>

            <input type="text" placeholder="Enter drug name" className="w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50"   data-cy="drug-name-input" onChange={(e) => setQuery(e.target.value)} />
            <input type="number" placeholder="Number of Results" className="w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50" value={nbMaxResults} onChange={(e) => setNbMaxResults(Number(e.target.value))} />
            <input type="number" placeholder="Threshold" className="w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50" value={threshold} onChange={(e) => setThreshold(Number(e.target.value))} />
          </div>

          {/* Right side button and results */}
          <div className={styles.resultSection}>
            <button type="button" className="w-full text-white bg-cyan-700 hover:bg-cyan-800 rounded-lg px-5 py-2.5 mb-4" onClick={handleFuzzyFetch} data-cy="search-button">
              Search for Matching Medications
            </button>

            {results.length > 0 && (
              <div className="mt-4">
                <h2 className="font-bold mb-2">Matching Results:</h2>
                {results.map((result, index) => (
                  <button key={index} className="block w-full px-4 py-2 my-1 text-left bg-gray-100 rounded-lg text-gray-700 hover:bg-gray-200" data-cy={`fuzzy-result-${result.matching_name}`} onClick={() => handleTranslationFetch(result.matching_name)}>
                    {result.matching_name}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Translation result at the bottom */}
        {translationResult && (
          <div className="mt-6 text-center">
            <h2 className="font-bold">Translation Result:</h2>
            <p><strong>Translated Name:</strong> {translationResult.translated_name}</p>
            <p><strong>Source Language:</strong> {translationResult.translated_source}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;