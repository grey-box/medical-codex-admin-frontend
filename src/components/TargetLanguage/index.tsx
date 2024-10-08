import React, { FC, useState } from "react";
import {
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent,
} from "@mui/material";

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

const languages = ["English", "Ukrainian", "Russian", "German"];

interface SourceLanguageProps {
  onLanguageChange: (language: string) => void;
}

const SourceLanguage: FC<SourceLanguageProps> = ({ onLanguageChange }) => {
  const [selectedLanguage, setSelectedLanguage] = useState<string>("");

  const handleChange = (event: SelectChangeEvent<string>): void => {
    const value = event.target.value;
    setSelectedLanguage(value);
    onLanguageChange(value);
  };

  return (
    <FormControl fullWidth>
      <InputLabel id="language-select-label">Language</InputLabel>
      <Select
        labelId="language-select-label"
        id="language-select"
        value={selectedLanguage}
        onChange={handleChange}
        input={<OutlinedInput label="Language" />}
        MenuProps={MenuProps}
      >
        {languages.map((language) => (
          <MenuItem key={language} value={language}>
            {language}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SourceLanguage;
