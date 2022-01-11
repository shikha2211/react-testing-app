import Todo from "./components/todo";
import React from "react"

function App (){

    const todos =[
        {id: 1, title: 'wash dishes', completed: true},
        {id: 2, title: 'make dinner', completed: false},
    ];
   
    return(
        <div>
            {todos.map ((todo) => {      
                return (<Todo key={todo.id} todo={todo} />)
            })}
        </div>
    );

}

export default App;

