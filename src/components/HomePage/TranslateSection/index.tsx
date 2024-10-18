import React, { FC, useState } from "react";
import Dropdown from "@/components/ui/Dropdown";
import SectionError from "@/components/HomePage/SectionError";
import LastResortWarnModal from "@/components/ui/modals/LastResortWarnModal";

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
  const [isFeatureEnabled, setIsFeatureEnabled] = useState<boolean>(false);
  const [isWarningModalOpen, setIsWarningModalOpen] = useState<boolean>(false);
  const validateAndTranslate = () => {
    if (!targetLanguage) {
      setTranslateError("Target language is required.");
    } else {
      setTranslateError(null);
      handleTranslate();
    }
  };

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
        <div className="flex flex-col w-full md:w-1/4">
          <button
            className={`bg-[#2f876e] h-12 text-white rounded-lg shadow-md ${
              loading
                ? "cursor-not-allowed opacity-50"
                : "hover:bg-[#256c54] transition-all"
            }`}
            onClick={validateAndTranslate}
            disabled={loading || !selectedMedicine}
          >
            {loading ? "Loading..." : "Translate"}
          </button>

          <div className="block md:hidden">
            <SectionError errorMessage={translateError} />
          </div>
        </div>
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
              className="absolute w-0 h-0 opacity-0"
            />
            <div
              className={`block w-14 h-8 rounded-full ${isFeatureEnabled ? "bg-green-500" : "bg-gray-300"} cursor-pointer`}
              onClick={handleSwitchToggle}
            >
              <div
                className={`absolute left-1 top-1 w-6 h-6 rounded-full bg-white transition-transform duration-200 ${isFeatureEnabled ? "transform translate-x-full" : ""}`}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="hidden mt-5 md:block">
        <SectionError errorMessage={translateError} />
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

export default TranslateSection;
