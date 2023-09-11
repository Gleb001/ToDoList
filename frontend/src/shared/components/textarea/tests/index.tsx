// import =================================================== //
// libs ----------------------------------------------------- //
import { describe, expect, test } from "@jest/globals";
import { TextArea } from "..";
import { fireEvent, render, screen } from "@testing-library/react";
// internal ------------------------------------------------- //
import { checkAttrubutes } from "@shared/libs/checkAttributes";
import { initialValue, attrs } from "./constants";
import { setup } from "./helpers/setup";

// main ===================================================== //
describe("Testing TextArea in @shared/components", () => {
    test("get textarea with attrs and initialValue", () => {
        const { textarea } = setup(initialValue, attrs);

        checkAttrubutes(textarea, attrs);
        expect(textarea.value).toBe(initialValue);
    });
    test("get textarea without attrs and initialValue", () => {
        const { textarea } = setup();

        expect(textarea.getAttribute("id")).toBeNull();
        expect(textarea.value).toBe("");
    });

    test("change value textarea -> dont change textarea's scroll", () => {
        const { textarea } = setup();
        const new_value = "Any text";

        expect(textarea.value).toBe("");
        fireEvent.change(textarea, { target: { value: new_value }});
        expect(textarea.value).toBe(new_value);
    });
    test("change value textarea -> change textarea's scroll", () => {
        const { textarea } = setup();
        const new_value = "Any text";
        const mockScrollHeight = jest.spyOn(textarea, "scrollHeight", "get");

        expect(textarea.value).toBe("");
        mockScrollHeight.mockReturnValue(15);
        fireEvent.change(textarea, { target: { value: new_value }});
        expect(textarea.value).toBe(new_value);
        expect(textarea.style.height).toBe("35px");
    });
});