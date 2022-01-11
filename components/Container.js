import Input from "./Input"; 
import Button from "./Button";
import React, { useState } from "react";

function App(){
    const[showDiv,setShowDiv]=useState(false);
    return(
        <div>
            <Input showDiv={showDiv} />
            <Button />
        </div>
    );
}

export default App;