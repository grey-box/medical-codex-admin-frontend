'use client';
import { useState } from "react";

function SearchBox() {
    const list = ["Tylenol", "Advil", "Aleve"];
    
    const style = `
        #search {
            display: flex;
            align-items: center;
            flex-direction: column;
            width: 10em;
        }

        #search-box {
        font-size: 24px;
            width: 100%;
        }

        #dropdown-content {
            display: none;
            list-style: none;
            max-height: 5em;
            width: 100%;
        }

        #dropdown-content li:hover {
            background-color: blue;
        }
    `;
    return (
        <div id="search">
            <input id="search-box" placeholder="search medication names" type="text" />
            <ul id="dropdown-content">
                {list.map((item) => <li key={item} >{item} </li>)}
            </ul>
            <style>{style}</style>
        </div>
    );
}
    
export default SearchBox;
          