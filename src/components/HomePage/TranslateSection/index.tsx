import React, { FC, useState, useEffect } from "react";
import Dropdown from "@/components/ui/Dropdown";
import SectionError from "@/components/HomePage/SectionError";
import LastResortWarnModal from "@/components/ui/modals/LastResortWarnModal";
import handleLastResort from "@/utils/handleLastResort";

interface TranslateSectionProps {
  selectedMedicine: string;
  targetLanguage: string;
  setTargetLanguage: (value: string) => void;
  outputTranslation: string;
  setOutputTranslation: (value: string) => void;
  handleTranslate: () => Promise<string | null>;
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
  setOutputTranslation,
  handleTranslate,
  languages,
  translateError,
  setTranslateError,
  loading,
}) => {
  const [isWarningModalOpen, setIsWarningModalOpen] = useState<boolean>(false);
  const [lastResortLoading, setLastResortLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsWarningModalOpen(false);
  }, [selectedMedicine]);

  const validateAndTranslate = async () => {
    if (!targetLanguage) {
      setTranslateError("Target language is required.");
    } else {
      setTranslateError(null);
      setOutputTranslation("");
      const translation = await handleTranslate();
      if (!translation) {
        setIsWarningModalOpen(true);
      }
    }
  };

  const handleConfirmEnable = async () => {
    setIsWarningModalOpen(false);
    setLastResortLoading(true);
    setOutputTranslation("");
    try {
      const translated = await handleLastResort(
        selectedMedicine,
        targetLanguage,
        process.env.NEXT_PUBLIC_API_URL,
      );
      setOutputTranslation(translated);
    } catch {
      setTranslateError("Last resort translation failed.");
    } finally {
      setLastResortLoading(false);
    }
  };

  const isButtonDisabled =
    !targetLanguage || !selectedMedicine || loading || lastResortLoading;

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
          value={targetLanguage}
          disabled={!selectedMedicine}
        />
        <div className="flex flex-col w-full md:w-1/4">
          <button
            className={`h-12 rounded-lg shadow-md ${
              isButtonDisabled
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-[#2f876e] text-white hover:bg-[#256c54] transition-all"
            }`}
            onClick={validateAndTranslate}
            disabled={isButtonDisabled}
          >
            {loading
              ? "Loading..."
              : lastResortLoading
                ? "Last Resort Loading..."
                : "Translate"}
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
