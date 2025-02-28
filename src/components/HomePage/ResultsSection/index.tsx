import React, { FC } from "react";
import Dropdown from "@/components/ui/Dropdown";

interface ResultsSectionProps {
  medicines: Array<{ matching_name: string }>;
  selectedMedicine: string;
  setSelectedMedicine: (value: string) => void;
}

const ResultsSection: FC<ResultsSectionProps> = ({
  medicines,
  selectedMedicine,
  setSelectedMedicine,
}) => {
  return (
    <div className="p-5" data-testid="results-section">
      <div className="m-2 text-lg font-semibold text-center font-inter">
        Results
      </div>
      <Dropdown
        label="Select Medicine"
        options={medicines.map((medicine) => medicine.matching_name)}
        onChange={setSelectedMedicine}
        value={selectedMedicine}
        disabled={medicines.length === 0}
        data-testid="results-dropdown"
      />
    </div>
  );
};

export default ResultsSection;
