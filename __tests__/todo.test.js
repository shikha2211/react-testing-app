import { render ,screen , cleanup } from "@testing-library/react";
import Todo from "../components/todo";
import React from 'react';
import renderer from 'react-test-renderer';

afterEach(() =>{
   cleanup
})

/* test("render div component",() => {
   const div=document.createElement("div")
   ReactDOM.render(<Todo/> , div);
}) */

test("test the div element of todo", () => {
    const todo = {id: 1, title: 'wash dishes', completed: true};
   render(<Todo todo={todo} />);
   const todoElement = screen.getByTestId("todo-1")
   expect(todoElement).toBeInTheDocument();
   expect(todoElement).toHaveTextContent("wash dishes");
   expect(todoElement).toContainHTML('</strike>');
  
})

test("test the div element of todo", () => {
   const todo = {id: 2, title: 'make dinner', completed: false};
  render(<Todo todo={todo} />);
  const todoElement = screen.getByTestId("todo-2")
  expect(todoElement).toBeInTheDocument();
  expect(todoElement).toHaveTextContent("make dinner");
  expect(todoElement).not.toContainHTML('<strike>');
})

test("create a snapshot" ,() => {
   const todo = {id: 1, title: 'wash dishes', completed: true};
   const tree = renderer.create(<Todo todo={todo} />).toJSON();
   //console.log(tree);
   expect(tree).toMatchSnapshot();
})
