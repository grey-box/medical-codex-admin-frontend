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
            background-color:
        }
    `;
    return (
    <nav id="navbar">
        <style>
            {style}
        </style>
        <img src="\logoGREY-BOX.jpg"></img>
    </nav>
    );
}
  
export default Navbar;
  