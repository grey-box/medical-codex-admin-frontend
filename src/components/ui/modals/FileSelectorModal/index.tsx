import React, { useState, FC } from "react";
import FileUploadButton from "../../Buttons/FileUploadButton";
import CameraCaptureButton from "../../Buttons/CameraCaptureButton";

const FileSelectorModal: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <div>
      {/* Trigger Button */}
      <button
        onClick={openModal}
        className="bg-[#2e7c64] text-white font-bold py-2 px-2 mx-0 rounded-lg shadow-md hover:bg-[#256c54] transition-all"
      >
        OCR
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black bg-opacity-30">
          <div
            className="bg-[#0a2740] rounded-xl shadow-lg p-6 flex flex-col
                     w-[85vw] h-[85vw] sm:w-[45vw] sm:h-[45vw] md:w-[45vh] md:h-[45vh] 
                     lg:w-[42vh] lg:h-[42vh] xl:w-[40vh] xl:h-[40vh]"
          >
            {/* Header */}
            <div className="relative text-white mb-4">
              {/* Close button in corner */}
              <button
                onClick={closeModal}
                className="absolute -top-6 -right-3 text-white text-3xl font-bold hover:text-red-400"
              >
                &times;
              </button>

              {/* Centered header */}
              <h2 className="text-2xl font-semibold text-center">
                Select Upload Option
              </h2>
            </div>

            {/* Buttons Section */}
            <div className="flex flex-1 items-center justify-evenly">
              <FileUploadButton
                onFileSelected={(file) => {
                  console.log("File selected: ", file);
                }}
              >
                Upload File
              </FileUploadButton>
              <CameraCaptureButton
                onPhotoCaptured={(file) =>
                  console.log("Photo captured: ", file)
                }
              >
                Upload From Camera
              </CameraCaptureButton>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FileSelectorModal;
