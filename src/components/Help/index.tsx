import React, { FC } from "react";

const Help: FC = () => {
  return (
    <div className="bg-[#044677]">
      <div className="relative w-full h-auto">
        <div className="relative w-full h-auto">
          <div className="absolute text-4xl font-extrabold text-center text-white transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 font-inter">
            Help Info
          </div>
          <img
            src="/images/assets/pills.png"
            className="w-full h-auto"
            alt="green and blue pills"
          />
        </div>
      </div>
      <div className="p-5">
        <p className="mx-12 text-lg font-semibold text-center text-white font-inter">
          This pages explains how the application operates and how to perform
          the various functions associated with the application. It assists the
          user if they have a query about a button or functionality of the touch
          panel.
        </p>
      </div>

      <section id="help" className="help1">
        <div className="container">
          <div className="flex flex-row items-center gap-[55px]">
            <img
              src="/images/assets/whitepills.png"
              className="w-1/2 h-auto mb-5"
              alt="white pills"
            />
            <div className="flex flex-col">
              <h1 className="text-3xl font-extrabold text-white font-inter">
                Terminology
              </h1>
              <ul className="list-none">
                <li className="flex flex-col">
                  <a className="text-xl font-semibold text-white font-inter">
                    Dropdown Menu
                  </a>
                  <a className="text-base font-thin text-white font-inter">
                    Select source and target language
                  </a>
                </li>
                <li className="flex flex-col">
                  <a className="text-xl font-semibold text-white font-inter">
                    Input Textbox
                  </a>
                  <a className="text-base font-thin text-white font-inter">
                    Enter search word in English
                  </a>
                </li>
                <li className="flex flex-col">
                  <a className="text-xl font-semibold text-white font-inter">
                    Search Button
                  </a>
                  <a className="text-base font-thin text-white font-inter">
                    Search for word
                  </a>
                </li>
                <li className="flex flex-col">
                  <a className="text-xl font-semibold text-white font-inter">
                    Output Textbox
                  </a>
                  <a className="text-base font-thin text-white font-inter">
                    Database Search Results
                  </a>
                </li>
                <li className="flex flex-col">
                  <a className="text-xl font-semibold text-white font-inter">
                    Translate Button
                  </a>
                  <a className="text-base font-thin text-white font-inter">
                    Translate output text search results to selected language
                  </a>
                </li>
                <li className="flex flex-col">
                  <a className="text-xl font-semibold text-white font-inter">
                    Output Textbox 2
                  </a>
                  <a className="text-base font-thin text-white font-inter">
                    Translation Results
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Help;
