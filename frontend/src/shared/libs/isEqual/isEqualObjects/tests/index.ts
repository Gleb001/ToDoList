// import =================================================== //
import { describe, expect, test } from "@jest/globals";
import { isEqualObjects } from "..";

// main ===================================================== //
describe("Testing isEqualObjects in @shared/libs/isEqual/isEqualObjects", () => {
    test("equality objects", () => {
        const objects = [
            { a: 1, b: 2 },                              // object
            { a: 1, b: [1, 2], c: { a: [1, 2], b: 4 } }, // nested object
            {}                                           // empty object
        ];
        for (const obj of objects) {
            let clone_obj = JSON.parse(JSON.stringify(obj));
            expect(isEqualObjects(obj, clone_obj)).toBeTruthy();
        }
    });
    test("not equality objects", () => {
        const objects = [
            [
                { a: 1, b: 2 },
                { a: 1, b: 2, c: 45 }
            ], // object
            [
                { a: 1, b: [1, 2], c: { a: [1, 2], b: 4      } },
                { a: 1, b: null,   c: { a: [1, 2], b: [1, 2] } }
            ], // nested object
            [
                {},
                { a: 1 }
            ], // empty object
        ];
        for (const [obj_1, obj_2] of objects) {
            expect(isEqualObjects(obj_1, obj_2)).toBeFalsy();
        }
    });
    test("equality common objects and empty object", () => {
        const objects = [
            { a: 1, b: 2 },                              // object
            { a: 1, b: [1, 2], c: { a: [1, 2], b: 4 } }, // nested object
        ];
        for (const obj of objects) {
            expect(isEqualObjects(obj, {})).toBeFalsy();
        }
    });
});