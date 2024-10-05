import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { SelectChangeEvent } from '@mui/material/Select';

const ITEM_HEIGHT: number = 48;
const ITEM_PADDING_TOP: number = 8;
const MenuProps: { PaperProps: { style: { maxHeight: number; width: number; } } } = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const languages: string[] = [
  'English',
  'Ukrainian',
  'Russian',
  'German',
];

function getStyles(language: string, languageType: string[], theme: any): { fontWeight: number } {
  return {
    fontWeight:
      languageType.indexOf(language) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

interface SourceLanguageProps {
  onLanguageChange: (language: string) => void;
  className?: string; 
}

const SourceLanguage: React.FC<SourceLanguageProps> = ({ onLanguageChange }) => {
  const theme = useTheme();
  const [selectedLanguage, setSelectedLanguage] = React.useState<string>('');

  const handleChange = (event: SelectChangeEvent<string>): void => {
    const value = event.target.value as string;
    setSelectedLanguage(value);
    onLanguageChange(value);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-name-label">Language</InputLabel>
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          value={selectedLanguage}
          onChange={handleChange}
          input={<OutlinedInput label="Language" />}
          MenuProps={MenuProps}
        >
          {languages.map((language: string) => (
            <MenuItem
              key={language}
              value={language}
              style={getStyles(language, [selectedLanguage], theme)}
            >
              {language}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}

export default SourceLanguage;