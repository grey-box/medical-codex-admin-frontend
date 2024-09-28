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
            margin: 2em;
        }

        #search-box {
            font-size: .75em;
            padding: .5em 1em;
            width: 100%;
            border: none;
            border-radius: 1em;
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
            <style>{style}</style>
            <input id="search-box" placeholder="search medication names" type="text" />
            <ul id="dropdown-content">
                {list.map((item) => <li key={item} >{item} </li>)}
            </ul>
        </div>
    );
}
    
export default SearchBox;
          