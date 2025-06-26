import React, { useRef, useEffect, useState } from "react";

interface Props {
  onPhotoCaptured: (file: File) => void;
  className?: string;
  children?: string;
}

const CameraCaptureButton: React.FC<Props> = ({
  onPhotoCaptured,
  className = "",
  children,
}) => {
  const cameraInputRef = useRef<HTMLInputElement | null>(null);
  const [cameraAvailable, setCameraAvailable] = useState(false);

  useEffect(() => {
    const checkCamera = async () => {
      try {
        const devices = await navigator.mediaDevices.enumerateDevices();
        const hasCamera = devices.some(
          (device) => device.kind === "videoinput",
        );
        setCameraAvailable(hasCamera);
      } catch (err) {
        console.warn("Error checking for camera:", err);
        setCameraAvailable(false);
      }
    };

    checkCamera();
  }, []);

  const handleClick = () => {
    if (cameraAvailable) {
      cameraInputRef.current?.click();
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      onPhotoCaptured(file);
    }
  };

  return (
    <>
      <button
        onClick={handleClick}
        disabled={!cameraAvailable}
        className={`w-[35%] aspect-square rounded-lg flex items-center justify-center text-center text-sm font-semibold transition 
          ${
            cameraAvailable
              ? "bg-red-600 text-white hover:bg-red-700"
              : "bg-gray-500 text-gray-300 cursor-not-allowed"
          }
          ${className}`}
      >
        {children}
      </button>
      <input
        ref={cameraInputRef}
        type="file"
        accept="image/*"
        capture="environment"
        hidden
        onChange={handleChange}
      ></input>
    </>
  );
};

export default CameraCaptureButton;
