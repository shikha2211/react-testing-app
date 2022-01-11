import React, { useState } from "react";

function counter(){
    const [count,setCount] = useState(0);

    const INCREMENT = [1,2,5,10];

    return(
        <div>
              <h2>Counter value is: {count}</h2> 
            { 
                 
                INCREMENT.map(value => 
                    <button type="button" onClick={ 
                        () => {
                            setCount(count + value)

                    }}>
                        +{value}
                        
                    </button>
                    

                    )


            }
           

        </div>
    );
}

export default counter;