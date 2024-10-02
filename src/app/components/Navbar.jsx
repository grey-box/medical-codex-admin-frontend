'use client';

import React, { useState } from "react";

function Navbar(label) {
    const langIcons = {
        "English": "/icon-great-britain.png",
        "Ukrainian": "/icon-ukraine.png",
        "Russian": "/icon-russia.png"
    }
    
    let langs = ["English", "Ukrainian", "Russian"];

    const [
        selectedLang,
        setSelectedLang,
    ] = useState("English");

    const handleSelection = (value) => {
        setSelectedLang(value);
    };

    const style = `
        #navbar {
            position: sticky;
            top: 0;
            height: 3em;
            background-color: grey;
            z-index: 1;
        }
        #logo {
            height: 3em;
            width: 3em;
            float: left;
        }
        #nav-links {
            float: left;
        }
        .nav-link {
            float: left;
            display: block;
            text-align: center;
            text-decoration: none;
            padding: .8em;
            font-weight: 500;
        }
        .nav-link:hover {
            background-color: var(--accent);
        }
        #lang-picker {
            float: right;
            position: relative;
            width: 8 em;
        }
        #lang-selected-img {
            height:2em;
            width 2em;
        }
        #lang-selected {
            display:flex;
            align-items: center;
            padding: .5em;
        }
        #lang-arrow {
            height: 1em;
            width: 1em;
        }
        #lang-selected:hover #lang-selected-img {
            border: .1em solid white !important;
            border-radius: 1em;
        }
        #lang-dropdown {
            display: none;
            position: absolute;
            background-color: grey;
            flex-direction: column;
            
        }
        #lang-picker:hover #lang-dropdown {
            display: flex;
        }
        .lang-img {
            height: 2em;
            width: 2em;
        }
        .lang-select {
            padding: .5em;
            display: inline-flex;
            align-items: center;
        }
        .lang-select:hover .lang-img{
            border: .1em solid white !important;
            border-radius: 1em;
        }
    `;

    return (
    <nav id="navbar">
        <style>
            {style}
        </style>
        <img id="logo" src="\logoGREY-BOX.jpg"></img>
        <div id="nav-links">
            <a className="nav-link" href="#">HOME</a>
            <a className="nav-link" href="#">ABOUT</a>
            <a className="nav-link" href="#">HELP</a>
        </div>
        <div id="lang-picker">
            <div id="lang-selected">
                
                <img src={langIcons[selectedLang]} id="lang-selected-img" value={selectedLang}></img>
                <label>{selectedLang}</label>
                <img src="/icons-expand-arrow.png" id="lang-arrow"></img>
            </div>
            <div id="lang-dropdown">
                {langs.map(lang => 
                    (lang != selectedLang)? 
                    <div className="lang-select" onClick={() => handleSelection(lang) }>
                    <img src={langIcons[lang]} className="lang-img" key={lang} ></img><label>{lang}</label></div>:null
                )}
                
            </div>
        </div>
    </nav>
    );
}
  
export default Navbar;
  