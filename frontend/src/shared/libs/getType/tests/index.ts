// import =================================================== //
import { describe, expect, test } from "@jest/globals";
import { getType } from "..";

// main ===================================================== //
describe("Testing getType in @shared/libs", () => {
    test("get primitive type", () => {
        const primitives = {
            "string": "this is string",
            "number": 123,
            "boolean": false,
            "symbol": Symbol("any"),
            "bigint": BigInt(123),
            "undefined": undefined,
            "null": null,
        };
        for (const type in primitives) {
            expect(getType(primitives[type])).toBe(type);
        }
    });
    test("get object type", () => {
        const objects = {
            "object": { age: 18 },
            "array": [ 1, 2, 3 ],
            "function": () => "this is function",
        };
        for (const type in objects) {
            expect(getType(objects[type])).toBe(type);
        }
    });
});