import React, { useState, FC } from "react";
import Dropdown from "@/components/ui/Dropdown";
import handleSearch from "@/utils/handleSearch";
import handleTranslate from "@/utils/handleTranslate";

const NEXT_PUBLIC_API_URL: string | undefined = process.env.NEXT_PUBLIC_API_URL;

const languages = ["English", "Ukrainian", "Russian", "German"];

const Home: FC = () => {
  const [inputSearch, setInputSearch] = useState<string>("");
  const [outputTranslation, setOutputTranslation] = useState<string>("");
  const [medicines, setMedicines] = useState<Array<{ matching_name: string }>>(
    [],
  );
  const [selectedMedicine, setSelectedMedicine] = useState<string>("");
  const [targetLanguage, setTargetLanguage] = useState<string>("");
  const [sourceLanguage, setSourceLanguage] = useState<string>("");

  return (
    <div className="relative flex flex-col overflow-hidden">
      <div className="relative flex flex-col flex-grow">
        <div className="p-4 text-4xl font-bold text-center">
          Medical Translation Tool
        </div>
        <div className="mx-10 border-b-2"></div>

        <div className="p-5">
          <div className="text-sm font-semibold font-inter">
            Source Language
          </div>
          <div className="flex flex-col gap-5 md:flex-row md:items-center">
            <Dropdown
              label="Source Language"
              options={languages}
              onChange={setSourceLanguage}
            />
            <input
              type="text"
              className="w-full md:w-[150px] h-[35px] text-base font-inter font-semibold text-[#044677] text-center shadow-md border-none"
              placeholder="Word to Search"
              value={inputSearch}
              onChange={(e) => setInputSearch(e.target.value)}
            />
            <button
              className="bg-[#2f876e] w-full md:w-[90px] h-[48px] text-white rounded-lg shadow-md"
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
          <div className="text-sm font-semibold font-inter">
            Database Results
          </div>
          <Dropdown
            label="Select Medicine"
            options={medicines.map((medicine) => medicine.matching_name)}
            onChange={setSelectedMedicine}
          />
        </div>

        <div className="p-5">
          <div className="text-sm font-semibold font-inter">
            Translation Results
          </div>
          <div className="p-5 text-sm font-semibold font-inter">
            Target Language
          </div>
          <div className="flex flex-col gap-5 md:flex-row md:items-center">
            <Dropdown
              label="Target Language"
              options={languages}
              onChange={setTargetLanguage}
            />
            <button
              className="bg-[#2f876e] w-full md:w-[90px] h-[48px] text-white rounded-lg shadow-md"
              onClick={() =>
                handleTranslate(
                  selectedMedicine,
                  targetLanguage,
                  setOutputTranslation,
                  NEXT_PUBLIC_API_URL,
                )
              }
            >
              Translate
            </button>
            <input
              type="text"
              className="w-[320px] h-[25px] text-base shadow-md border-none"
              value={outputTranslation}
              readOnly
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
