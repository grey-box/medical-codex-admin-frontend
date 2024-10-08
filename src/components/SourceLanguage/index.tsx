import React, { FC, useState } from "react";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";

interface SourceLanguageProps {
  onLanguageChange: (language: string) => void;
}

const languages = ["English", "Ukrainian", "Russian", "German"];

const SourceLanguage: FC<SourceLanguageProps> = ({ onLanguageChange }) => {
  const [selectedLanguage, setSelectedLanguage] = useState<string>("");

  const handleChange = (event: SelectChangeEvent<string>): void => {
    const value = event.target.value;
    setSelectedLanguage(value);
    onLanguageChange(value);
  };

  return (
    <FormControl fullWidth>
      <InputLabel>Language</InputLabel>
      <Select value={selectedLanguage} onChange={handleChange} label="Language">
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
