'use client';

import React from 'react';
import Navbar from "../../components/Navbar.jsx";
import '../../../public/styles/page.css';

const Help = () => {
    return (
        <main id="help-page">
            <Navbar/>

            <div className="about-header">
                <div className="image-container">
                    <div className="header-about-title">Help & Information</div>
                    <img src='/images/pills.png' className="child" alt="Pills illustration"/>
                </div>
            </div>

            <div className="about-container">
                <h1 className="about-title">How to Use Our Translation Tool</h1>
                <span className="rectangle"/>
                <p className="section-subtitle">
                    Our translation tool is designed to be intuitive and easy to use. Here's everything you need to know
                    about the various features and functions available to you.
                </p>

                <div className="team-section">
                    <div className="team-member">
                        <h3 className="name">Language Selection</h3>
                        <p className="job-title">Step 1</p>
                        <p>Use the dropdown menus at the top to select your source and target languages. The source
                            language is the original text's language, while the target language is what you want to
                            translate to.</p>
                    </div>

                    <div className="team-member">
                        <h3 className="name">Input Text</h3>
                        <p className="job-title">Step 2</p>
                        <p>Enter your text in the input textbox. This is where you'll paste or type the content you want
                            to translate. The system supports various text lengths and formats.</p>
                    </div>

                    <div className="team-member">
                        <h3 className="name">Translation Process</h3>
                        <p className="job-title">Step 3</p>
                        <p>Click the translate button to process your text. The system will analyze your input and
                            provide an accurate translation based on your selected languages.</p>
                    </div>

                    <div className="team-member">
                        <h3 className="name">Output Results</h3>
                        <p className="job-title">Step 4</p>
                        <p>Your translation will appear in the output textbox. You can copy this text, review it, and
                            use it as needed. For some languages, additional context or alternatives may be
                            provided.</p>
                    </div>

                    <div className="team-member">
                        <h3 className="name">Additional Features</h3>
                        <p className="job-title">Advanced Options</p>
                        <p>Use the search functionality to find specific translations, access our database of
                            pre-translated content, and review suggested alternatives for more accurate results.</p>
                    </div>

                    <div className="team-member">
                        <h3 className="name">Review Process</h3>
                        <p className="job-title">Quality Assurance</p>
                        <p>Some translations may be marked for review, indicating that they've been verified by our
                            system. This helps ensure accuracy and reliability of the translations.</p>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Help;