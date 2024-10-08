import React, { useState, FC } from "react";
import SourceLanguage from "@/components/SourceLanguage";
import TargetLanguage from "@/components/TargetLanguage";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import handleSearch from "@/utils/handleSearch";
import handleTranslate from "@/utils/handleTranslate";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const NEXT_PUBLIC_API_URL: string | undefined = process.env.NEXT_PUBLIC_API_URL;

const Home: FC = () => {
  const [inputSearch, setInputSearch] = useState<string>("");
  const [outputTranslation, setOutputTranslation] = useState<string>("");
  const [medicines, setMedicines] = useState<Array<{ matching_name: string }>>(
    [],
  );
  const [selectedMedicine, setSelectedMedicine] = useState<string>("");
  const [targetLanguage, setTargetLanguage] = useState<string>("");
  const [sourceLanguage, setSourceLanguage] = useState<string>("");

  const handleMedicineChange = (e: SelectChangeEvent<string>): void => {
    setSelectedMedicine(e.target.value);
  };

  return (
    <div className="relative flex flex-col overflow-hidden">
      <div className="relative flex flex-col flex-grow">
        <div className="p-4 text-4xl font-bold text-center">
          Medical Translation Tool
        </div>
        <div className="mx-10 border-b-2"></div>
        <h1 className="p-3 text-sm font-semibold font-inter">
          Source Language
        </h1>
        <div className="flex flex-col gap-5 p-5 md:flex-row md:items-center">
          <SourceLanguage onLanguageChange={setSourceLanguage} />
          <input
            type="text"
            className="w-full md:w-[150px] h-[35px] text-base font-inter font-semibold text-[#044677] text-center shadow-md border-none"
            placeholder="Word to Search"
            value={inputSearch}
            onChange={(e) => setInputSearch(e.target.value)}
          />
          <button
            className="bg-[#2f876e] w-full md:w-[90px] h-[48px] text-white rounded-lg border-none font-inter shadow-md"
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
        <h1 className="p-5 text-sm font-semibold font-inter">
          Target Language
        </h1>
        <TargetLanguage className="p-5" onLanguageChange={setTargetLanguage} />
        <div className="flex flex-col p-5">
          <h1 className="pt-5 text-sm font-semibold font-inter">
            Database Search Results
          </h1>
          <div className="text-left flex-[20%]">
            <FormControl sx={{ m: 1, width: 300 }}>
              <InputLabel id="medicine-select-label">Medicine</InputLabel>
              <Select
                labelId="medicine-select-label"
                id="medicine-select"
                value={selectedMedicine}
                onChange={handleMedicineChange}
                input={<OutlinedInput label="Medicine" />}
                MenuProps={MenuProps}
              >
                {medicines.map((medicine) => (
                  <MenuItem
                    key={medicine.matching_name}
                    value={medicine.matching_name}
                  >
                    {medicine.matching_name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
        </div>
        <div className="flex flex-col p-5">
          <h1 className="text-sm font-semibold font-inter">
            Translation Results
          </h1>
          <div className="pl-[120px]">
            <button
              className="bg-[#2f876e] w-full md:w-[90px] h-[48px] text-white rounded-lg border-none font-inter shadow-md"
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
          </div>
          <div className="p-5">
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
