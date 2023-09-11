// import =================================================== //
import { describe, expect, test } from "@jest/globals";
import { bubbleSortArray } from "..";

// main ===================================================== //
describe("Testing bubbleSortArray in @shared/libs", () => {
    test("sorting a common array", () => {
        const input =  [1, 5, 2, 4, 3];
        const output = [1, 2, 3, 4, 5];
        expect(bubbleSortArray(input)).toEqual(output);
    });
    test("sorting an reversed array", () => {
        const input =  [5, 4, 3, 2, 1];
        const output = [1, 2, 3, 4, 5];
        expect(bubbleSortArray(input)).toEqual(output);
    });
    test("sorting the initially correct array", () => {
        const input = [1, 2, 3, 4, 5];
        expect(bubbleSortArray(input)).toEqual(input);
    });
    test("sorting an empty array", () => {
        expect(bubbleSortArray([])).toEqual([]);
    });
});