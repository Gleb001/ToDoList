// import =================================================== //
import { describe, expect, test } from "@jest/globals";
import { isEqualArrays } from "..";

// main ===================================================== //
describe("Testing isEqualObjects in @shared/libs/isEqual/isEqualArrays", () => {
    test("equality arrays", () => {
        const arrays = [
            [1, 2, 3],                      // array
            [1, 2, [1, 2, 3, [ 1, 1, 1 ]]], // nested array
            []                              // empty array
        ];
        for (const array of arrays) {
            let clone_array = JSON.parse(JSON.stringify(array));
            expect(isEqualArrays(array, clone_array)).toBeTruthy();
        }
    });
    test("not equality arrays", () => {
        const arrays = [
            [
                [1, 2, 3],
                [0, 0, 0]
            ], // array
            [
                [1, 2, [ 1, 2, [ 1, 2 ]]],
                [1, 2, [ 1, 2, [ 1, 0 ]]],
            ], // nested array
            [
                [],
                [1]
            ], // empty array
        ];
        for (const [arr_1, arr_2] of arrays) {
            expect(isEqualArrays(arr_1, arr_2)).toBeFalsy();
        }
    });
    test("equality common array and empty array", () => {
        const arrays = [
            [1, 2, 3],                      // array
            [1, 2, [1, 2, 3, [ 1, 1, 1 ]]], // nested object
        ];
        for (const arr of arrays) {
            expect(isEqualArrays(arr, [])).toBeFalsy();
        }
    });
});