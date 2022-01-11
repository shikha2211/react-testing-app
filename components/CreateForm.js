import useForm from "./lib/useForm";
import React from "react";

export default function CreateForm(){

    const { inputs , handleChange} = useForm({
        name: "Apple",
        price : 100,
        description : "Juicy fruits"
    });

    return(
        <form>
            <label htmlFor="name" />
            Name
            <input type="text" 
            id="name" 
            name="name" 
            placeholder="name" 
            value={inputs.name}
            onChange={handleChange} />
            <br />

            <label htmlFor="price" />
            Price
            <input type="text" 
            id="price" 
            name="price" 
            placeholder="price" 
            value={inputs.price}
            onChange={handleChange} />
            <br />

            <label htmlFor="description" />
            Description
            <input type="text" 
            id="description" 
            name="description" 
            placeholder="description" 
            value={inputs.description}
            onChange={handleChange} />

        </form>

    );


}
