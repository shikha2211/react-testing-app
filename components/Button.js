const { useState } = require("react");
import React from "react";

function showAnotherButton(){
    const [showAnotherButton, setshowAnotherButton] =useState(false);
    return(
        <div>
            <button data-testid="button" onClick=
            {() => setshowAnotherButton(true)} 
            >Click Here</button>

            {
            showAnotherButton &&
            (
            <button data-testid="button">Click Here</button>
            )} 
        </div>
    );
}

export default showAnotherButton;