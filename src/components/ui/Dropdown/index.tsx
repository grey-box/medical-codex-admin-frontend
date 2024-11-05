import React, { FC } from "react";
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
  value: string;
  disabled?: boolean;
}

const Dropdown: FC<DropdownProps> = ({
  label,
  options,
  onChange,
  value,
  disabled = false,
}) => {
  const handleChange = (event: SelectChangeEvent<string>): void => {
    const selectedValue = event.target.value;
    onChange(selectedValue);
  };

  return (
    <FormControl fullWidth disabled={disabled}>
      <InputLabel>{label}</InputLabel>
      <Select
        value={value}
        onChange={handleChange}
        input={<OutlinedInput label={label} />}
      >
        {options && options.length > 0 ? (
          options.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))
        ) : (
          <MenuItem disabled value="">
            No options available
          </MenuItem>
        )}
      </Select>
    </FormControl>
  );
};

export default Dropdown;
