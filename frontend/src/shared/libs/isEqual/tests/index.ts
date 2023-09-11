// import =================================================== //
import { describe, expect, test } from "@jest/globals";
import { isEqual } from "..";
import { getType } from "../../getType";

// main ===================================================== //
describe("Testing isEqual in @shared/libs", () => {
    test("equality of primitives", () => {
        let list_primitives = [
            "a",         // string
            1,           // number
            Symbol("a"), // symbol
            undefined,   // undefined
            null,        // null
            true,        // boolean
            BigInt(1),   // bigint
        ];
        for (const item of list_primitives) {
            expect(isEqual(item, item)).toBeTruthy();
        }
    });
    test("not equality of primitives", () => {
        let list_primitives = [
            ["a", 1],           // string
            [1, "1"],           // number
            [Symbol("a"), "a"], // symbol
            [undefined, null],  // undefined
            [null, {}],         // null
            [true, 1],          // boolean
            [BigInt(1), 1],     // bigint
        ];
        for (const [item_1, item_2] of list_primitives) {
            expect(isEqual(item_1, item_2)).toBeFalsy();
        }
    });
    test("equality of objects", () => {
        let list_objects = [
            [1, 2, 3],                         // array
            [1, 2, { a: 123 }, [1]],           // nested array
            { a: 123 },                        // object
            { a: 123, b: [1], c: { a: 123 } }, // nested object
            function foo() { }                 // function 
        ];
        for (const item of list_objects) {
            let check;
            switch (getType(item)) {
                case "array":
                    check = [...item as Array<any>];
                    break;
                case "object":
                    check = { ...item };
                    break;
                default:
                    check = item;
                    break;
            }
            expect(isEqual(item, check)).toBeTruthy();
        }
    });
    test("not equality of primitives", () => {
        let list_objects = [
            [
                [1, 2, 3],
                [0, 0, 0]
            ], // array
            [
                [1, 2, [ 1, 2, 3], { a: 123, b: [ 1 ]}, { a: 1 }],
                [1, 2, [ 0, 0, 0], { a: 123, b: [ 1 ]}          ]
            ], // nested array
            [
                function foo () {},
                function bee() {},
            ], // function
            [
                {a: 1, b: 2, c: 3},
                {a: 1, b: 2      }
            ], // object
            [
                {a: 1, b: 2, c: [1, 2], d: { a: [0, 0, 0] }},
                {a: 1, b: 2, c: [],     d: { a: null }     }
            ] // nested object
        ];
        for (const [item_1, item_2] of list_objects) {
            expect(isEqual(item_1, item_2)).toBeFalsy();
        }
    });
});