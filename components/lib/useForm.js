//Example of a Custom Hook Form 

import { useState } from "react";

export default function useForm(initials = {}){
    const [inputs, setInputs] = useState(initials);

    function handleChange(e){
        let  {value, name, type} =e.target;

        if(type === "number"){
            value= parseInt(value);
        }

        setInputs ({
            ...inputs,
            [name] : value
        })
    }
    
    return {
        inputs,
        handleChange
    };

}

