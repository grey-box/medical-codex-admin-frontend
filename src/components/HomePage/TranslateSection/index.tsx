import React, { FC } from "react";
import Dropdown from "@/components/ui/Dropdown";

interface TranslateSectionProps {
  selectedMedicine: string;
  targetLanguage: string;
  setTargetLanguage: (value: string) => void;
  outputTranslation: string;
  handleTranslate: () => void;
  languages: string[];
}

const TranslateSection: FC<TranslateSectionProps> = ({
  selectedMedicine,
  targetLanguage,
  setTargetLanguage,
  outputTranslation,
  handleTranslate,
  languages,
}) => {
  return (
    <div className="p-5">
      <div className="m-2 text-lg font-semibold text-center font-inter">
        Translate/Localize drug name...
      </div>
      <div className="flex flex-col gap-5 md:flex-row md:items-center">
        <Dropdown
          label="Target Language"
          options={languages}
          onChange={setTargetLanguage}
          disabled={!selectedMedicine}
        />
        <button
          className="bg-[#2f876e] w-full md:w-1/4 h-12 text-white rounded-lg shadow-md hover:bg-[#256c54] transition-all"
          onClick={handleTranslate}
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
      </div>
    </div>
  );
};

export default TranslateSection;
