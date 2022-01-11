import { render,screen,fireEvent} from "@testing-library/react";
import React from "react";
import { act } from "react-dom/test-utils";
import Button from "../components/Button";

describe("test button component" , () => { 
    it("one button shows on screen" , () => {
        render(<Button />);
        const button = screen.getByTestId("button");
        expect(button).toBeTruthy();
    })

    it("renders only one button before click" , () => {
        render(<Button />);
        const buttonList = screen.getAllByTestId("button");
        expect(buttonList).toHaveLength(1);
    })

    it("renders two buttons after click" , async () => {
        await act(async () => {
            render(<Button />);
            const buttonList = screen.getAllByTestId("button");
            await fireEvent.click(buttonList[0]);
            expect(screen.getAllByTestId("button")).toHaveLength(2);
        });
    });
})