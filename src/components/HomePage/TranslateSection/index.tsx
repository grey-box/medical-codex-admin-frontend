import React, { FC } from "react";
import Dropdown from "@/components/ui/Dropdown";
import SectionError from "@/components/HomePage/SectionError";

interface TranslateSectionProps {
  selectedMedicine: string;
  targetLanguage: string;
  setTargetLanguage: (value: string) => void;
  outputTranslation: string;
  handleTranslate: () => void;
  languages: string[];
  translateError: string | null;
  setTranslateError: (msg: string | null) => void;
  loading: boolean;
}

const TranslateSection: FC<TranslateSectionProps> = ({
  selectedMedicine,
  targetLanguage,
  setTargetLanguage,
  outputTranslation,
  handleTranslate,
  languages,
  translateError,
  setTranslateError,
  loading,
}) => {
  const validateAndTranslate = () => {
    if (!targetLanguage) {
      setTranslateError("Target language is required.");
    } else {
      setTranslateError(null);
      handleTranslate();
    }
  };

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
          className={`bg-[#2f876e] w-full md:w-1/4 h-12 text-white rounded-lg shadow-md ${
            loading
              ? "cursor-not-allowed opacity-50"
              : "hover:bg-[#256c54] transition-all"
          }`}
          onClick={validateAndTranslate}
          disabled={loading || !selectedMedicine}
        >
          {loading ? "Loading..." : "Translate"}
        </button>
        <input
          type="text"
          className="w-full h-12 text-base text-center font-inter font-semibold text-[#044677] shadow-md border border-gray-300 rounded-md md:w-1/2 focus:border-[#2f876e] focus:ring-[#2f876e] focus:outline-none p-2"
          placeholder="Translation will appear here"
          value={outputTranslation}
          readOnly
        />
      </div>
      <SectionError errorMessage={translateError} />
    </div>
  );
};

export default TranslateSection;
