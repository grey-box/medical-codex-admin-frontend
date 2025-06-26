import React, { Children, useRef } from "react";

interface Props {
  onFileSelected: (file: File) => void;
  className?: string;
  children?: string;
}

const FileUploadButton: React.FC<Props> = ({
  onFileSelected,
  className = "",
  children,
}) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      onFileSelected(file);
    }
  };

  return (
    <>
      <button
        onClick={handleClick}
        className={`w-[35%] aspect-square bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition flex items-center justify-center text-center text-sm font-semibold ${className}`}
      >
        {children}
      </button>
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        hidden
        onChange={handleChange}
      ></input>
    </>
  );
};

export default FileUploadButton;
