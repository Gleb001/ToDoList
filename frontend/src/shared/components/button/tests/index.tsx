// import =================================================== //
import { describe, expect, test } from "@jest/globals";
import { getButton } from "./helpers/setup";
import { attributes } from "./constants/attributes";
import { checkAttrubutes } from "@shared/libs/checkAttributes";
import { fireEvent, screen } from "@testing-library/react";

// main ===================================================== //
describe("Testing Button in @shared/components", () => {
    test("Button component", () => {
        const textButton = "Click me";
        const { button } = getButton(attributes, textButton);
        const mockClickHandler = jest.spyOn(button, "onclick", "get");
        
        expect(button.innerHTML).toBe(textButton);
        checkAttrubutes(button, attributes);
        fireEvent.click(button);
        expect(mockClickHandler).toHaveBeenCalledTimes(1);
    });
});