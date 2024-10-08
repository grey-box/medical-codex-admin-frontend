import React, { FC, useState } from "react";
import {
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent,
} from "@mui/material";

interface DropdownProps {
  label: string;
  options: string[];
  onChange: (value: string) => void;
}

const Dropdown: FC<DropdownProps> = ({ label, options, onChange }) => {
  const [selectedOption, setSelectedOption] = useState<string>("");

  const handleChange = (event: SelectChangeEvent<string>): void => {
    const value = event.target.value;
    setSelectedOption(value);
    onChange(value);
  };

  return (
    <FormControl fullWidth>
      <InputLabel>{label}</InputLabel>
      <Select
        value={selectedOption}
        onChange={handleChange}
        input={<OutlinedInput label={label} />}
      >
        {options.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default Dropdown;
