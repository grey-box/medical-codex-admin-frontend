import React, { useState, FC } from "react";
import SearchSection from "@/components/HomePage/SearchSection";
import ResultsSection from "@/components/HomePage/ResultsSection";
import TranslateSection from "@/components/HomePage/TranslateSection";
import handleSearch from "@/utils/handleSearch";
import handleTranslate from "@/utils/handleTranslate";
import HelpModal from "@/components/ui/modals/HelpModal";
import Head from "next/head";

const NEXT_PUBLIC_API_URL: string | undefined = process.env.NEXT_PUBLIC_API_URL;

const languages = ["English", "Ukrainian", "Russian", "German"];

const SectionError: FC<{ errorMessage: string | null }> = ({
  errorMessage,
}) => {
  return errorMessage ? (
    <div className="text-center text-red-500">{errorMessage}</div>
  ) : null;
};

const HomePage: FC = () => {
  const [inputSearch, setInputSearch] = useState<string>("");
  const [outputTranslation, setOutputTranslation] = useState<string>("");
  const [medicines, setMedicines] = useState<Array<{ matching_name: string }>>(
    [],
  );
  const [selectedMedicine, setSelectedMedicine] = useState<string>("");
  const [targetLanguage, setTargetLanguage] = useState<string>("");
  const [sourceLanguage, setSourceLanguage] = useState<string>("");
  const [searchError, setSearchError] = useState<string | null>(null);
  const [translateError, setTranslateError] = useState<string | null>(null);
  const [loadingSearch, setLoadingSearch] = useState<boolean>(false);
  const [loadingTranslate, setLoadingTranslate] = useState<boolean>(false);

  const handleSearchAction = async () => {
    setLoadingSearch(true);
    await handleSearch(
      inputSearch,
      targetLanguage,
      sourceLanguage,
      setMedicines,
      NEXT_PUBLIC_API_URL,
      setSearchError,
    );
    setLoadingSearch(false);
  };

  const handleTranslateAction = async () => {
    setLoadingTranslate(true);
    await handleTranslate(
      selectedMedicine,
      targetLanguage,
      setOutputTranslation,
      NEXT_PUBLIC_API_URL,
    );
    setLoadingTranslate(false);
  };

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
          setSourceLanguage={setSourceLanguage}
          handleSearch={handleSearchAction}
          languages={languages}
          searchError={searchError}
          setSearchError={setSearchError}
          loading={loadingSearch}
        />

        <SectionError errorMessage={searchError} />

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
          languages={languages}
          translateError={translateError}
          setTranslateError={setTranslateError}
          loading={loadingTranslate}
        />

        <SectionError errorMessage={translateError} />
      </div>
    </div>
  );
};

export default HomePage;
