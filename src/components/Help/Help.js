import React from "react";

const Help = () => {
  return (
    <div className="bg-[#044677]">
      <div className="relative w-full h-auto">
        <div className="relative w-full h-auto">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl font-extrabold text-center font-inter">
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
        <p className="text-lg text-white font-inter text-center mx-12 font-semibold">
          This pages explains how the application operates and how to perform the various functions associated with the application. It assists the user if they have a query about a button or functionality of the touch panel.
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
              <h1 className="text-white font-inter font-extrabold text-3xl">Terminology</h1>
              <ul className="list-none">
                <li className="flex flex-col">
                  <a className="text-white font-inter font-semibold text-xl">Dropdown Menu</a>
                  <a className="text-white font-inter font-thin text-base">Select source and target language</a>
                </li>
                <li className="flex flex-col">
                  <a className="text-white font-inter font-semibold text-xl">Input Textbox</a>
                  <a className="text-white font-inter font-thin text-base">Enter search word in English</a>
                </li>
                <li className="flex flex-col">
                  <a className="text-white font-inter font-semibold text-xl">Search Button</a>
                  <a className="text-white font-inter font-thin text-base">Search for word</a>
                </li>
                <li className="flex flex-col">
                  <a className="text-white font-inter font-semibold text-xl">Output Textbox</a>
                  <a className="text-white font-inter font-thin text-base">Database Search Results</a>
                </li>
                <li className="flex flex-col">
                  <a className="text-white font-inter font-semibold text-xl">Translate Button</a>
                  <a className="text-white font-inter font-thin text-base">Translate output text search results to selected language</a>
                </li>
                <li className="flex flex-col">
                  <a className="text-white font-inter font-semibold text-xl">Output Textbox 2</a>
                  <a className="text-white font-inter font-thin text-base">Translation Results</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Help;
