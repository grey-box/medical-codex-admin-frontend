import React, { FC } from "react";

interface SectionErrorProps {
  errorMessage: string | null;
}

const SectionError: FC<SectionErrorProps> = ({ errorMessage }) => {
  return errorMessage ? (
    <div className="mt-4 text-center text-red-500">{errorMessage}</div>
  ) : null;
};

export default SectionError;
