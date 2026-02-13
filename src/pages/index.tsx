import React, { useState, FC, useEffect } from "react";
import SearchSection from "@/components/HomePage/SearchSection";
import ResultsSection from "@/components/HomePage/ResultsSection";
import TranslateSection from "@/components/HomePage/TranslateSection";
import handleSearch from "@/utils/handleSearch";
import handleTranslate from "@/utils/handleTranslate";
import handleSymptomsSearch from "@/utils/handleSymptomsSearch";
import handleSymptomsTranslate from "@/utils/handleSymptomsTranslate";
import HelpModal from "@/components/ui/modals/HelpModal";
import Head from "next/head";

const NEXT_PUBLIC_API_URL: string | undefined = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080';

const languages = ["English", "Ukrainian", "Russian", "French"];

const HomePage: FC = () => {
  useEffect(() => {
    console.log("API URL:", process.env.NEXT_PUBLIC_API_URL);
  }, []);
  const [inputSearch, setInputSearch] = useState<string>("");
  const [outputTranslation, setOutputTranslation] = useState<string>("");
  const [medicines, setMedicines] = useState<Array<{
    matching_algorithm: string,
    matching_name: string,
    matching_row_number: number,
    matching_source: number,
    matching_uid: number,
  }>>(
    [],
  );
  const [symptoms, setSymptoms] = useState<Array<{
    matching_algorithm: string,
    matching_name: string,
    matching_row_number: number,
    matching_source: number,
    matching_uid: number,
  }>>(
    [],
  );
  const [selectedMedicine, setSelectedMedicine] = useState<string>("");
  const [selectedSymptom, setSelectedSymptom] = useState<string>("");
  const [targetLanguage, setTargetLanguage] = useState<string>("");
  const [sourceLanguage, setSourceLanguage] = useState<string>("");
  const [searchError, setSearchError] = useState<string | null>(null);
  const [translateError, setTranslateError] = useState<string | null>(null);
  const [loadingSearch, setLoadingSearch] = useState<boolean>(false);
  const [loadingTranslate, setLoadingTranslate] = useState<boolean>(false);
  const [infoSet, setInfoSet] = useState<'medicine' | 'symptoms'>('medicine');

  const handleSearchAction = async () => {
    setLoadingSearch(true);
    if (infoSet === 'medicine') {
      await handleSearch(
        inputSearch,
        sourceLanguage,
        setMedicines,
        NEXT_PUBLIC_API_URL,
        setSearchError,
      );
    } else {
      await handleSymptomsSearch(
        inputSearch,
        sourceLanguage,
        setSymptoms,
        NEXT_PUBLIC_API_URL,
        setSearchError,
      );
    }
    setLoadingSearch(false);
  };

  const handleTranslateAction = async (): Promise<string | null> => {
    setLoadingTranslate(true);
    try {
      if (infoSet === 'medicine') {
        const selectedMedicineObject = medicines.find(med => med.matching_name === selectedMedicine);
        if (!selectedMedicineObject) {
          setTranslateError("Selected medicine not found in the results.");
          return null;
        }
        return await handleTranslate(
          selectedMedicineObject,
          targetLanguage,
          setOutputTranslation,
          NEXT_PUBLIC_API_URL,
        );
      } else {
        const selectedSymptomObject = symptoms.find(sym => sym.matching_name === selectedSymptom);
        if (!selectedSymptomObject) {
          setTranslateError("Selected symptom not found in the results.");
          return null;
        }
        return await handleSymptomsTranslate(
          selectedSymptomObject,
          targetLanguage,
          setOutputTranslation,
          NEXT_PUBLIC_API_URL,
        );
      }
    } catch (error) {
      console.error("Translation error:", error);
      setTranslateError("Translation failed.");
      return null;
    } finally {
      setLoadingTranslate(false);
    }
  };

  const handleSetSourceLanguage = (lang: string) => {
    setSourceLanguage(lang);
    setSelectedMedicine("");
    setSelectedSymptom("");
    setOutputTranslation("");
  };

  const handleInfoSetChange = (newInfoSet: 'medicine' | 'symptoms') => {
    setInfoSet(newInfoSet);
    setInputSearch("");
    setOutputTranslation("");
    setSelectedMedicine("");
    setSelectedSymptom("");
    setMedicines([]);
    setSymptoms([]);
    setSearchError(null);
    setTranslateError(null);
  };

  const targetLanguages = languages.filter((lang) => lang !== sourceLanguage);

  useEffect(() => {
    setTargetLanguage("");
    setOutputTranslation("");
    setTranslateError(null);
  }, [selectedMedicine, selectedSymptom]);

  useEffect(() => {
    setOutputTranslation("");
  }, [targetLanguage]);

  const currentResults = infoSet === 'medicine' ? medicines : symptoms;
  const currentSelected = infoSet === 'medicine' ? selectedMedicine : selectedSymptom;
  const setCurrentSelected = infoSet === 'medicine' ? setSelectedMedicine : setSelectedSymptom;

  return (
    <div className="relative flex flex-col overflow-hidden">
      <Head>
        <title>Project Medical Codex | Home</title>
        <meta
          name="description"
          content="A tool developed to help coordinate medical equipment between countries."
        />
      </Head>
      <div className="relative flex flex-col flex-grow">
        <div className="flex items-center justify-between p-5">
          <div className="flex flex-col">
            <span className="text-3xl font-bold md:text-4xl">
              Project Medical Codex
            </span>
            <span className="mt-2 text-sm md:text-base">
              A tool developed to help coordinate medical equipment between
              countries.
            </span>
          </div>
          <HelpModal />
        </div>

        <div className="w-11/12 mx-auto mt-5 border-b-2 md:w-9/12"></div>

        {/* Choose Info Set Section */}
        <div className="p-5">
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-3">Choose Info Set</h3>
            <div className="flex gap-6">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={infoSet === 'medicine'}
                  onChange={() => handleInfoSetChange('medicine')}
                  className="w-4 h-4"
                />
                <span>Medicine/Drug</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={infoSet === 'symptoms'}
                  onChange={() => handleInfoSetChange('symptoms')}
                  className="w-4 h-4"
                />
                <span>Symptoms</span>
              </label>
            </div>
          </div>
        </div>

        <SearchSection
          inputSearch={inputSearch}
          setInputSearch={setInputSearch}
          sourceLanguage={sourceLanguage}
          setSourceLanguage={handleSetSourceLanguage}
          handleSearch={handleSearchAction}
          languages={languages}
          searchError={searchError}
          setSearchError={setSearchError}
          loading={loadingSearch}
          searchTitle={infoSet === 'medicine' ? "Search for drug name..." : "Search for symptoms..."}
          searchPlaceholder={infoSet === 'medicine' ? "Word to search" : "Symptom to search"}
        />

        <ResultsSection
          medicines={currentResults}
          selectedMedicine={currentSelected}
          setSelectedMedicine={setCurrentSelected}
          dropdownLabel={infoSet === 'medicine' ? "Select Medicine" : "Select Symptom"}
        />

        <TranslateSection
          selectedMedicine={currentSelected}
          targetLanguage={targetLanguage}
          setTargetLanguage={setTargetLanguage}
          outputTranslation={outputTranslation}
          handleTranslate={handleTranslateAction}
          setOutputTranslation={setOutputTranslation}
          languages={targetLanguages}
          translateError={translateError}
          setTranslateError={setTranslateError}
          loading={loadingTranslate}
          translateTitle={infoSet === 'medicine' ? "Translate/Localize drug name..." : "Translate/Localize symptoms..."}
        />
      </div>
    </div>
  );
};

export default HomePage;
