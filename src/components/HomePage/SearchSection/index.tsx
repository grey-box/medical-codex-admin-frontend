import React, { FC } from "react";
import Dropdown from "@/components/ui/Dropdown";

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
  loading,
}) => {
  const validateAndSearch = () => {
    if (!inputSearch || !sourceLanguage) {
      setSearchError("Both fields are required.");
    } else {
      setSearchError(null);
      handleSearch();
    }
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
        />
        <input
          type="text"
          className="w-full md:w-1/2 h-12 text-base font-inter font-semibold text-[#044677] text-center shadow-md border border-gray-300 rounded-md focus:border-[#2f876e] focus:ring-[#2f876e] focus:outline-none p-2"
          placeholder="Word to search"
          value={inputSearch}
          onChange={(e) => setInputSearch(e.target.value)}
        />
        <button
          className={`bg-[#2f876e] w-full md:w-1/4 h-12 text-white rounded-lg shadow-md ${
            loading
              ? "cursor-not-allowed opacity-50"
              : "hover:bg-[#256c54] transition-all"
          }`}
          onClick={validateAndSearch}
          disabled={loading}
        >
          {loading ? "Loading..." : "Search"}
        </button>
      </div>
    </div>
  );
};

export default SearchSection;
