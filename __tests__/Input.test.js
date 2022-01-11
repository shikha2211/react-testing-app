
import { fireEvent, render , screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import React from "react";
import { act } from "react-dom/test-utils";
import Input from "../components/Input";

describe("Input Component test", () => {
    it("testing input component" , () => {
        const {getAllByTestId} = render(<Input showDiv={false} />);
        const input = getAllByTestId("inputbar") ;
        expect(input).toBeTruthy();
    })
    
    it("shows div" ,() => {
        const {getAllByTestId}= render(<Input showDiv={true} />);
        const div = getAllByTestId("DivWeWantToShow");
        expect(div).toBeTruthy();

    })

    it("does not show div" , () => {
        const{queryAllByTestId} = render(<Input showDiv={false} />);
        const div=queryAllByTestId("DivWeWantToShow");
        expect(div).toBeTruthy();

    })

    it("change in input causes change in input tag" , async() => {
        await act(async () => {
            render(<Input showDiv={true} />);
            const input = screen.getByTestId("inputbar");
            const h1element = screen.getByTestId("displaySearch");
            const inputWord = "Hello";
            
            await fireEvent.change (input, {target: { value: inputWord}}); 
            expect(h1element.innerHTML).toBe(inputWord);
        })

    })
})