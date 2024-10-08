import React, { useState, FC } from "react";

const HelpModal: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <div>
      <button
        onClick={openModal}
        className="bg-[#2e7c64] text-white font-bold py-2 px-4 rounded-lg shadow-md hover:bg-[#256c54] transition-all"
      >
        Help
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative w-11/12 p-5 bg-white rounded-lg md:w-1/2">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-3xl font-bold text-[#044677]">Help Info</h2>
              <button
                onClick={closeModal}
                className="text-lg font-bold text-black"
              >
                &times;
              </button>
            </div>

            <div className="p-4">
              <p className="text-base font-semibold text-[#044677] mb-4">
                This page explains how the application operates and how to
                perform the various functions associated with the application.
                It assists the user if they have a query about a button or
                functionality of the touch panel.
              </p>

              <div className="flex flex-col space-y-4">
                <h3 className="text-2xl font-extrabold text-[#044677]">
                  Terminology
                </h3>
                <ul className="space-y-3 list-none">
                  <li className="flex flex-col">
                    <span className="text-xl font-semibold text-[#044677]">
                      Dropdown Menu
                    </span>
                    <span className="text-base font-thin text-gray-600">
                      Select source and target language
                    </span>
                  </li>
                  <li className="flex flex-col">
                    <span className="text-xl font-semibold text-[#044677]">
                      Input Textbox
                    </span>
                    <span className="text-base font-thin text-gray-600">
                      Enter search word in English
                    </span>
                  </li>
                  <li className="flex flex-col">
                    <span className="text-xl font-semibold text-[#044677]">
                      Search Button
                    </span>
                    <span className="text-base font-thin text-gray-600">
                      Search for word
                    </span>
                  </li>
                  <li className="flex flex-col">
                    <span className="text-xl font-semibold text-[#044677]">
                      Output Textbox
                    </span>
                    <span className="text-base font-thin text-gray-600">
                      Database Search Results
                    </span>
                  </li>
                  <li className="flex flex-col">
                    <span className="text-xl font-semibold text-[#044677]">
                      Translate Button
                    </span>
                    <span className="text-base font-thin text-gray-600">
                      Translate output text search results to selected language
                    </span>
                  </li>
                  <li className="flex flex-col">
                    <span className="text-xl font-semibold text-[#044677]">
                      Output Textbox 2
                    </span>
                    <span className="text-base font-thin text-gray-600">
                      Translation Results
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HelpModal;
