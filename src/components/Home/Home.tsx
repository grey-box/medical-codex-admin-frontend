import React, { useState, FC } from "react";
import SocialMediaIcons from "../SocialMediaIcons/SocialMediaIcons";
import SourceLanguage from "../SourceLanguage/SourceLanguage";
import TargetLanguage from "../TargetLanguage/TargetLanguage";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
//import { useTheme } from '@emotion/react';
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";

const ITEM_HEIGHT: number = 48;
const ITEM_PADDING_TOP: number = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const REACT_APP_API_URL: string | undefined = process.env.REACT_APP_API_URL;

const Home: FC = () => {
  //const theme = useTheme();
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

  const handleSearch = async (): Promise<void> => {
    try {
      const response = await fetch(`${REACT_APP_API_URL}/fuzzymatching/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query: inputSearch,
          target_language: targetLanguage,
          source_language: sourceLanguage,
        }),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      console.log("Received data:", data);
      setMedicines(data.results);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleTranslate = async (): Promise<void> => {
    try {
      const response = await fetch(`${REACT_APP_API_URL}/translate/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query: selectedMedicine,
          target_language: targetLanguage,
        }),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const dataFromServer = await response.json();
      setOutputTranslation(dataFromServer.translated_name);
    } catch (error) {
      console.error("Error in handleTranslate function:", error);
    }
  };

  return (
    <div className="relative flex flex-col min-h-screen overflow-hidden">
      <div className="relative flex flex-col flex-grow">
        <div
          className="absolute inset-0 bg-center bg-cover"
          style={{ backgroundImage: "url('background2.jpg')" }}
        ></div>
        <h1 className="p-5 text-sm font-semibold font-inter">
          Source Language
        </h1>
        <SourceLanguage className="p-5" onLanguageChange={setSourceLanguage} />
        <h1 className="p-5 text-sm font-semibold font-inter">
          Target Language
        </h1>
        <TargetLanguage className="p-5" onLanguageChange={setTargetLanguage} />
        <div className="flex flex-col items-start w-full p-5">
          <div className="flex justify-start items-center flex-grow-[0.4] gap-8">
            <div className="text-right flex-[20%]">
              <input
                type="text"
                className="w-[150px] h-[35px] text-base font-inter font-semibold text-[#044677] text-center shadow-md border-none"
                placeholder="Word to Search"
                value={inputSearch}
                onChange={(e) => setInputSearch(e.target.value)}
              />
            </div>
            <div className="text-center flex-[20%]">
              <button
                className="w-[90px] h-[48px] bg-[#044677] text-white rounded-lg border-none font-inter shadow-md"
                onClick={handleSearch}
              >
                Search
              </button>
            </div>
          </div>
        </div>
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
              className="w-[90px] h-[48px] bg-[#044677] text-white rounded-lg border-none font-inter shadow-md"
              onClick={handleTranslate}
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
      <div className="bg-[#044677] p-5 text-center h-[60px] z-[1]">
        <SocialMediaIcons />
      </div>
    </div>
  );
};

export default Home;
