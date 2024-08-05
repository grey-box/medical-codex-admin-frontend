import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

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

const languages = [
  'English',
  'Ukrainian',
  'Russian',
  'German',
];

function getStyles(language, languageType, theme) {
  return {
    fontWeight:
      languageType.indexOf(language) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function SourceLanguage({ onLanguageChange }) {
  const theme = useTheme();
  const [selectedLanguage, setSelectedLanguage] = React.useState('');

  const handleChange = (event) => {
    const value = event.target.value
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
          {languages.map((language) => (
            <MenuItem
              key={language}
              value={language}
              style={getStyles(language, selectedLanguage, theme)}
            >
              {language}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
