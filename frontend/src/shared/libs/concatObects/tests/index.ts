// import =================================================== //
import { describe, expect, test } from "@jest/globals";
import { concatObjects } from "..";

// main ===================================================== //
describe("Testing combineValues in @shared/libs", () => {
    test("merging objects without nesting levels", () => {
        const input = {
            obj_1: { a: 1, b: 2 },
            obj_2: { a: 2, b: 4, c: 6 }
        };
        const output = { a: 1, b: 2, c: 6 };
        expect(concatObjects(input.obj_1, input.obj_2)).toEqual(output);
    });
    test("merging objects with nesting levels", () => {
        const foo = () => "g"
        const input = {
            obj_1: {
                a: "1",
                b: 2,
                c: {
                    a: 1,
                    b: 2
                },
                e: [1, 2, 3],
                g: foo
            },
            obj_2: {
                a: "2",
                b: 4,
                c: 6,
                d: {
                    a: 1
                },
                e: [3, 3, 3],
                f: "sdfsdf",
                g: () => "a"
            }
        };
        const output = {
            a: "1 2",
            b: 2,
            c: {
                a: 1,
                b: 2
            },
            d: {
                a: 1
            },
            e: [1, 2, 3, 3, 3, 3],
            f: "sdfsdf",
            g: foo,
        };
        expect(concatObjects(input.obj_1, input.obj_2)).toEqual(output);
    });
    test("merging arrays", () => {
        const input = {
            arr_1: [1, 2, 3],
            arr_2: [0, 0, 0]
        };
        const output = {};
        expect(concatObjects(input.arr_1, input.arr_2)).toEqual(output);
    });
});