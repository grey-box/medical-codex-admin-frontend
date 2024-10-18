import React, { useState, FC } from "react";
import Dropdown from "@/components/ui/Dropdown";
import handleSearch from "@/utils/handleSearch";
import handleTranslate from "@/utils/handleTranslate";
import HelpModal from "@/components/ui/modals/HelpModal";
import LastResortWarnModal from "@/components/ui/modals/LastResortWarnModal";
import Head from "next/head";

const NEXT_PUBLIC_API_URL: string | undefined = process.env.NEXT_PUBLIC_API_URL;

const languages = ["English", "Ukrainian", "Russian", "German"];

const HomePage: FC = () => {
  const [inputSearch, setInputSearch] = useState<string>("");
  const [outputTranslation, setOutputTranslation] = useState<string>("");
  const [medicines, setMedicines] = useState<Array<{ matching_name: string }>>([]);
  const [selectedMedicine, setSelectedMedicine] = useState<string>("");
  const [targetLanguage, setTargetLanguage] = useState<string>("");
  const [sourceLanguage, setSourceLanguage] = useState<string>("");
  const [isFeatureEnabled, setIsFeatureEnabled] = useState<boolean>(false);
  const [isWarningModalOpen, setIsWarningModalOpen] = useState<boolean>(false);

  const SectionTitle: FC<{ text: string }> = ({ text }) => (
    <div className="m-2 text-lg font-semibold text-center font-inter">
      {text}
    </div>
  );

  const handleSwitchToggle = () => {
    if (!isFeatureEnabled) {
      setIsWarningModalOpen(true); 
    } else {
      setIsFeatureEnabled(false); 
    }
  };

  const handleConfirmEnable = () => {
    setIsFeatureEnabled(true);
    setIsWarningModalOpen(false);
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
            <span className="text-3xl font-bold md:text-4xl">Project Medical Codex</span>
            <span className="mt-2 text-sm md:text-base">
              A tool developed to help coordinate medical equipment between countries.
            </span>
          </div>
          <HelpModal />
        </div>

        <div className="w-11/12 mx-auto mt-5 border-b-2 md:w-9/12"></div>

        <div className="p-5">
          <SectionTitle text="Search for drug name..." />
          <div className="flex flex-col gap-5 md:flex-row md:items-center">
            <Dropdown
              label="Source Language"
              options={languages}
              onChange={setSourceLanguage}
            />
            <input
              type="text"
              className="w-full md:w-1/2 h-12 text-base font-inter font-semibold text-[#044677] text-center shadow-md border border-gray-300 rounded-md focus:border-[#2f876e] focus:ring-[#2f876e] focus:outline-none p-2"
              placeholder="Word to search"
              value={inputSearch}
              onChange={(e) => setInputSearch(e.target.value)}
            />
            <button
              className="bg-[#2f876e] w-full md:w-1/4 h-12 text-white rounded-lg shadow-md hover:bg-[#256c54] transition-all"
              onClick={() =>
                handleSearch(
                  inputSearch,
                  targetLanguage,
                  sourceLanguage,
                  setMedicines,
                  NEXT_PUBLIC_API_URL,
                )
              }
            >
              Search
            </button>
          </div>
        </div>

        <div className="p-5">
          <SectionTitle text="Results" />
          <Dropdown
            label="Select Medicine"
            options={medicines.map((medicine) => medicine.matching_name)}
            onChange={setSelectedMedicine}
            disabled={medicines.length === 0}
          />
        </div>

        <div className="p-5">
          <SectionTitle text="Translate/Localize drug name..." />
          <div className="flex flex-col gap-5 md:flex-row md:items-center">
            <Dropdown
              label="Target Language"
              options={languages}
              onChange={setTargetLanguage}
              disabled={!selectedMedicine}
            />
            <button
              className="bg-[#2f876e] w-full md:w-1/4 h-12 text-white rounded-lg shadow-md hover:bg-[#256c54] transition-all"
              onClick={() =>
                handleTranslate(
                  selectedMedicine,
                  targetLanguage,
                  setOutputTranslation,
                  NEXT_PUBLIC_API_URL,
                )
              }
              disabled={!targetLanguage || !selectedMedicine}
            >
              Translate
            </button>
            <input
              type="text"
              className="w-full h-12 text-base text-center font-inter font-semibold text-[#044677] shadow-md border border-gray-300 rounded-md md:w-1/2 focus:border-[#2f876e] focus:ring-[#2f876e] focus:outline-none p-2"
              placeholder="Translation will appear here"
              value={outputTranslation}
              readOnly
            />
            <div className="flex items-center">
              <span className="mr-2">Last Resort Translation:</span>
              <div className="relative">
                <input
                  type="checkbox"
                  checked={isFeatureEnabled}
                  onChange={handleSwitchToggle}
                  className="absolute opacity-0 w-0 h-0"
                />
                <div
                  className={`block w-14 h-8 rounded-full ${isFeatureEnabled ? 'bg-green-500' : 'bg-gray-300'} cursor-pointer`}
                  onClick={handleSwitchToggle}
                >
                  <div
                    className={`absolute left-1 top-1 w-6 h-6 rounded-full bg-white transition-transform duration-200 ${isFeatureEnabled ? 'transform translate-x-full' : ''}`}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isWarningModalOpen && (
        <LastResortWarnModal
          onConfirm={handleConfirmEnable}
          onCancel={() => setIsWarningModalOpen(false)}
        />
      )}
    </div>
  );
};

export default HomePage;
