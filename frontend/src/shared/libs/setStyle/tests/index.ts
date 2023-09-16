// import =================================================== //
import { describe, test } from "@jest/globals";
// internal ------------------------------------------------- //
import { getElement } from "./helpers/getElement";
import { hasStyle } from "./helpers/hasStyle";
import { style } from "./constants/style";
import { setStyle } from "..";

// main ===================================================== //
describe("Testing setStyle in @shared/libs", () => {

    const element = getElement();

    test("set common styles", () => {
        setStyle(element, style);
        expect(hasStyle(element, style)).toBeTruthy();
    });

    test("set empty styles", () => {
        setStyle(element, {});
        expect(hasStyle(element, {})).toBeTruthy();
    });

});