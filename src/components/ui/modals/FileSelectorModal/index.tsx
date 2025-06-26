import React, { useState } from "react";
import FileUploadButton from "../../Buttons/FileUploadButton";
import CameraCaptureButton from "../../Buttons/CameraCaptureButton";

interface Props {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  onFileSelected: (file: File) => void;
}

const FileSelectorModal: React.FC<Props> = ({
  isOpen,
  setIsOpen,
  onFileSelected,
}) => {
  const [isUploading, setIsUploading] = useState(false);

  const closeModal = () => setIsOpen(false);

  const handleFile = async (file: File) => {
    setIsUploading(true);
    await new Promise((res) => setTimeout(res, 1500)); // simulate upload delay
    setIsUploading(false);
    onFileSelected(file);
    closeModal();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black bg-opacity-30">
      <div
        className="
          relative bg-[#0a2740] rounded-xl shadow-lg p-6 flex flex-col
          w-[85vw] h-[85vw]
          sm:w-[45vw] sm:h-[45vw]
          md:w-[45vh] md:h-[45vh]
          lg:w-[42vh] lg:h-[42vh]
          xl:w-[40vh] xl:h-[40vh]
        "
      >
        {!isUploading ? (
          <>
            <button
              onClick={closeModal}
              className="absolute top-0 right-2 text-white text-3xl font-bold hover:text-red-400"
            >
              &times;
            </button>

            <h2 className="text-2xl text-white text-center font-semibold mb-4">
              Select Upload Option
            </h2>

            <div className="flex flex-1 items-center justify-evenly mt-4">
              <FileUploadButton onFileSelected={handleFile}>
                Upload File
              </FileUploadButton>
              <CameraCaptureButton onPhotoCaptured={handleFile}>
                Take Photo
              </CameraCaptureButton>
            </div>
          </>
        ) : (
          <div className="flex flex-col items-center justify-center flex-1">
            <div className="w-20 h-20 border-[6px] border-blue-300 border-t-transparent rounded-full animate-spin mb-4" />
            <p className="text-blue-300 text-2xl font-bold font-roboto">
              Uploading...
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default FileSelectorModal;
