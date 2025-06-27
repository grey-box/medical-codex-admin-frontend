import React, { useState, FC, useEffect } from "react";
import SearchSection from "@/components/HomePage/SearchSection";
import ResultsSection from "@/components/HomePage/ResultsSection";
import TranslateSection from "@/components/HomePage/TranslateSection";
import handleFuzzySearch from "@/utils/handleSearch/fuzzymatching";
import handleOcrSearch from "@/utils/handleSearch/OCR";
import handleTranslate from "@/utils/handleTranslate";
import HelpModal from "@/components/ui/modals/HelpModal";
import Head from "next/head";

const NEXT_PUBLIC_API_URL: string | undefined =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080";

const languages = ["English", "Ukrainian", "Russian", "French"];

const HomePage: FC = () => {
  useEffect(() => {
    console.log("API URL:", process.env.NEXT_PUBLIC_API_URL);
  }, []);
  const [inputSearch, setInputSearch] = useState<string>("");
  const [outputTranslation, setOutputTranslation] = useState<string>("");
  const [medicines, setMedicines] = useState<
    Array<{
      matching_algorithm: string;
      matching_name: string;
      matching_row_number: number;
      matching_source: number;
      matching_uid: number;
    }>
  >([]);
  const [selectedMedicine, setSelectedMedicine] = useState<string>("");
  const [targetLanguage, setTargetLanguage] = useState<string>("");
  const [sourceLanguage, setSourceLanguage] = useState<string>("");
  const [searchError, setSearchError] = useState<string | null>(null);
  const [translateError, setTranslateError] = useState<string | null>(null);
  const [loadingSearch, setLoadingSearch] = useState<boolean>(false);
  const [loadingTranslate, setLoadingTranslate] = useState<boolean>(false);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);

  const handleSearchAction = async () => {
    setLoadingSearch(true);

    if (uploadedFile) {
      await handleOcrSearch(
        uploadedFile,
        sourceLanguage,
        setMedicines,
        NEXT_PUBLIC_API_URL,
        setSearchError,
      );
      console.log("Performing OCR Search");
    } else {
      await handleFuzzySearch(
        inputSearch,
        sourceLanguage,
        setMedicines,
        NEXT_PUBLIC_API_URL,
        setSearchError,
      );
    }

    setLoadingSearch(false);
  };

  const handleTranslateAction = async (): Promise<string | null> => {
    setLoadingTranslate(true);
    try {
      const selectedMedicineObject = medicines.find(
        (med) => med.matching_name === selectedMedicine,
      );
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
    setOutputTranslation("");
  };

  const targetLanguages = languages.filter((lang) => lang !== sourceLanguage);

  useEffect(() => {
    setTargetLanguage("");
    setOutputTranslation("");
    setTranslateError(null);
  }, [selectedMedicine]);

  useEffect(() => {
    setOutputTranslation("");
  }, [targetLanguage]);

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
          uploadedFile={uploadedFile}
          setUploadedFile={setUploadedFile}
        />

        <ResultsSection
          medicines={medicines}
          selectedMedicine={selectedMedicine}
          setSelectedMedicine={setSelectedMedicine}
        />

        <TranslateSection
          selectedMedicine={selectedMedicine}
          targetLanguage={targetLanguage}
          setTargetLanguage={setTargetLanguage}
          outputTranslation={outputTranslation}
          handleTranslate={handleTranslateAction}
          setOutputTranslation={setOutputTranslation}
          languages={targetLanguages}
          translateError={translateError}
          setTranslateError={setTranslateError}
          loading={loadingTranslate}
        />
      </div>
    </div>
  );
};

export default HomePage;
