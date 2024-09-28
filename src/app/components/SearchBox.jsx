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
            font-size: .75em;
            color: black;
            list-style: none;
            max-height: 5em;
            z-index: 2;
            overflow-y: scroll;
            width: 100%;
            background-color: var(--foreground);
            border-radius: 0px 0px 1em 1em;
        }
        
        #dropdown-content li {
            padding: .5em 1em;
        }

        #dropdown-content li:hover {
            background-color: var(--accent);
            color: var(--foreground)
        }

        #search-box:focus + #dropdown-content{
            display: block !important;
        }

        #search-box:focus {
            border-radius: 1em 1em 0px 0px;
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
          