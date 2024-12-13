import React, { FC, useState } from "react";
import Dropdown from "@/components/ui/Dropdown";
import SectionError from "@/components/HomePage/SectionError";

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
  const sanitizeInput = (input: string) => {
    return input.replace(/<[^>]*>?/gm, "").replace(/[^\w\s]/gi, "");
  };

  const validateAndSearch = () => {
    const sanitizedInput = sanitizeInput(inputSearch);
    if (!sanitizedInput.trim()) {
      setSearchError("Search input cannot be empty.");
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

  const isButtonDisabled = !inputSearch || !sourceLanguage || loading;

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
        <input
          type="text"
          className="w-full md:w-1/2 h-12 text-base font-inter font-semibold text-[#044677] text-center shadow-md border border-gray-300 rounded-md focus:border-[#2f876e] focus:ring-[#2f876e] focus:outline-none p-2"
          placeholder="Word to search"
          value={inputSearch}
          onChange={(e) => setInputSearch(e.target.value)}
          data-testid="search-input"
        />
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
      <SectionError errorMessage={searchError} data-testid="section-error" />
    </div>
  );
};

export default SearchSection;
