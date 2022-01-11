import axios from "axios";
import { useEffect, useState } from "react";
import React from "react";

export default function ({url}){

    const [data,setData] = useState([]);

    useEffect (
        () =>{

        let mounted=true;

        const loadData =  () => {

            const response = axios.get(url)
                            //.then()
                            
            if(mounted){
                setData(response.data);
            }
        };

        loadData();

        return () => {
            mounted=false;

        }
        
    },[url]
    );

    if(!data){
        return <span data-testid="loading">Loading data...</span>
    }
        return <span data-testid="resolved">{data.greeting}</span>
    
}