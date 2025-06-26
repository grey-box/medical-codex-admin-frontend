import React, { FC, useState } from "react";
import SectionError from "@/components/HomePage/SectionError";
import { validateInput } from "@/utils/validation";
import Dropdown from "@/components/ui/Dropdown";
import FileSelectorModal from "@/components/ui/modals/FileSelectorModal";
import { FiFile } from "react-icons/fi"; // Feather Icons for file icon

interface SearchSectionProps {
  inputSearch: string;
  setInputSearch: (value: string) => void;
  sourceLanguage: string;
  setSourceLanguage: (value: string) => void;
  handleSearch: () => void;
  languages: string[];
  searchError: string | null;
  setSearchError: (msg: string | null) => void;
  loading: boolean;
}

const SearchSection: FC<SearchSectionProps> = ({
  inputSearch,
  setInputSearch,
  sourceLanguage,
  setSourceLanguage,
  handleSearch,
  languages,
  setSearchError,
  searchError,
  loading,
}) => {
  const [invalidChars, setInvalidChars] = useState<string | null>(null);

  const [uploadedFile, setUploadedFile] = useState<File | null>(null);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const validateAndSearch = () => {
    const { sanitizedInput, invalidChars } = validateInput(inputSearch);

    setInvalidChars(invalidChars);

    if (!sanitizedInput.trim()) {
      setSearchError("Search input cannot be empty or invalid.");
      return;
    }
    if (!sourceLanguage.trim()) {
      setSearchError("Source language cannot be empty.");
      return;
    }

    setSearchError(null);
    setInputSearch(sanitizedInput);
    handleSearch();
  };

  const isButtonDisabled =
    (!inputSearch && !uploadedFile) || !sourceLanguage || loading;

  const handleFileSelected = (file: File) => {
    setUploadedFile(file);
    setIsModalOpen(false);
  };

  const clearUploadedFile = () => {
    setUploadedFile(null);
    setInputSearch("");
  };

  return (
    <div className="p-5">
      <div className="m-2 text-lg font-semibold text-center font-inter">
        Search for drug name...
      </div>
      <div className="flex flex-col gap-5 md:flex-row md:items-center">
        <Dropdown
          label="Source Language"
          options={languages}
          onChange={setSourceLanguage}
          value={sourceLanguage}
          data-testid="source-language-dropdown"
        />
        <div className="w-full md:w-auto flex justify-center md:justify-start">
          <button
            onClick={() => setIsModalOpen(true)}
            className="
            bg-[#2e7c64] text-white font-bold rounded-lg shadow-md hover:bg-[#256c54] transition-all 
              w-full h-12 md:w-12 md:h-12 
              flex items-center justify-center text-[28px] leading-none
            "
          >
            📷
          </button>
        </div>
        <FileSelectorModal
          isOpen={isModalOpen}
          setIsOpen={setIsModalOpen}
          onFileSelected={handleFileSelected}
        ></FileSelectorModal>
        {uploadedFile ? (
          <div className="flex items-center w-full md:w-1/2 h-12 border border-gray-300 rounded-md shadow-md px-3 bg-white">
            <FiFile className="text-blue-400 mr-3 text-2xl" />
            <span className="truncate font-semibold text-[#044677]">
              {uploadedFile.name}
            </span>
            <button
              onClick={clearUploadedFile}
              className="ml-auto text-red-500 hover:text-red-700 font-bold"
              aria-label="Remove uploaded file"
            >
              &times;
            </button>
          </div>
        ) : (
          <input
            type="text"
            className="w-full md:w-1/2 h-12 text-base font-inter font-semibold text-[#044677] text-center shadow-md border border-gray-300 rounded-md focus:border-[#2f876e] focus:ring-[#2f876e] focus:outline-none p-2"
            placeholder="Word to search"
            value={inputSearch}
            onChange={(e) => setInputSearch(e.target.value)}
            data-testid="search-input"
          />
        )}
        <button
          className={`w-full md:w-1/4 h-12 rounded-lg shadow-md ${
            isButtonDisabled
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-[#2f876e] text-white hover:bg-[#256c54] transition-all"
          }`}
          onClick={validateAndSearch}
          disabled={isButtonDisabled}
          data-testid="search-button"
        >
          {loading ? "Loading..." : "Search"}
        </button>
      </div>
      {invalidChars && (
        <div
          className="mt-4 text-center text-yellow-500"
          data-testid="invalid-chars"
        >
          {invalidChars}
        </div>
      )}
      <SectionError errorMessage={searchError} data-testid="section-error" />
    </div>
  );
};

export default SearchSection;
