import React from "react";
import { useState } from "react";


function Input({ showDiv }){
    const [searchWord,setSearchWord] =useState("");

    return(
        <div>
            <input type="text" 
            data-testid="inputbar" 
            placeholder = "Search..."
            onChange={(e) => {
                setSearchWord(e.target.value)
            }}
            />
            <h1 data-testid="displaySearch">{searchWord}</h1>

            {
            showDiv &&
            (
            <div data-testid="DivWeWantToShow">
                Hello there. Welcome to the world of React.
            </div>
            )}
        </div>
    );
}

export default Input;