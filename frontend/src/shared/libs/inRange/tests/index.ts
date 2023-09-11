// import =================================================== //
import { describe, expect, test } from "@jest/globals";
import { inRange } from "..";

// main ===================================================== //
describe("Testing inRange in @shared/libs", () => {
    test("5 between 0 and 10", () => {
        expect(inRange(5, 0, 10)).toBe(5);
    });
    test("-5 between 0 and 10", () => {
        expect(inRange(-5, 0, 10)).toBe(0);
    });
    test("50 between 0 and 10", () => {
        expect(inRange(50, 0, 10)).toBe(10);
    });
});