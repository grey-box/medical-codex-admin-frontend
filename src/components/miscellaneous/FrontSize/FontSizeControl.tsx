import React, { useEffect, useState } from "react";

const MIN_FONT_SIZE = 12;
const MAX_FONT_SIZE = 32;
const DEFAULT_FONT_SIZE = 16;
const STORAGE_KEY = "appFontSize";

const FontSizeControl: React.FC = () => {
  const [fontSize, setFontSize] = useState<number>(DEFAULT_FONT_SIZE);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) setFontSize(Number(stored));
  }, []);

  useEffect(() => {
    document.documentElement.style.fontSize = `${fontSize}px`;
    localStorage.setItem(STORAGE_KEY, fontSize.toString());
  }, [fontSize]);

  const increase = () =>
    setFontSize((size) => Math.min(size + 2, MAX_FONT_SIZE));
  const decrease = () =>
    setFontSize((size) => Math.max(size - 2, MIN_FONT_SIZE));

  return (
    <div className="flex items-center gap-2 text-white text-sm">
      <button
        onClick={decrease}
        disabled={fontSize <= MIN_FONT_SIZE}
        className="px-2 py-1 rounded bg-white text-black hover:bg-gray-300 disabled:opacity-50"
      >
        −
      </button>
      <span className="w-10 text-center">{fontSize}px</span>
      <button
        onClick={increase}
        disabled={fontSize >= MAX_FONT_SIZE}
        className="px-2 py-1 rounded bg-white text-black hover:bg-gray-300 disabled:opacity-50"
      >
        +
      </button>
    </div>
  );
};

export default FontSizeControl;