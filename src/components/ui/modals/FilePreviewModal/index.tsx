import React, { useState } from "react";

interface Props {
  fileUrl: string;
  onClose: () => void;
}

const FilePreviewModal: React.FC<Props> = ({ fileUrl, onClose }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black bg-opacity-30">
      <div className="relative bg-[#0a2740] p-4 rounded-xl shadow-lg max-w-[90vw] max-h-[90vh] flex flex-col">
        <div className="w-full flex justify-end mb-1 h-6">
          <button
            className="text-3xl font-bold text-white hover:text-red-400 leading-none relative -top-2 z-20"
            onClick={onClose}
          >
            &times;
          </button>
        </div>

        {!imgError ? (
          <img
            src={fileUrl}
            alt="Cannot Preview This File Type"
            className="max-w-full max-h-[75vh] object-contain rounded"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="text-white text-center font-semibold p-8 -mt-6 text-xl">
            Cannot Preview This File Type
          </div>
        )}
      </div>
    </div>
  );
};

export default FilePreviewModal;
