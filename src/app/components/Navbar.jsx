'use client';

import React, { useState } from "react";

function Navbar(label) {
    const [
        selectedValue,
        setSelectedValue,
    ] = useState("English");

    const handleRadioChange = (value) => {
        setSelectedValue(value);
    };

    const style = `
        #navbar {
            height: 3em;
            background-color: grey;
            position: sticky;
            top: 0;
            width: 100%;
        }
        #logo {
            height: 3em;
            width: 3em;
        }
    `;
    return (
    <nav id="navbar">
        <style>
            {style}
        </style>
        <img id="logo" src="\logoGREY-BOX.jpg"></img>
    </nav>
    );
}
  
export default Navbar;
  