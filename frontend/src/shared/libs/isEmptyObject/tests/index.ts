// import =================================================== //
import { describe, expect, it } from "@jest/globals";
import { isEmptyObject } from "..";

// main ===================================================== //
describe("Testing isEmptyObject in @shared/libs/workWIthObjects/isEmptyObject", () => {
    it("empty object", () => {
        expect(isEmptyObject({       })).toBeTruthy();
    });
    it("not empty object", () => {
        expect(isEmptyObject({ a: 1  })).toBeFalsy();
        expect(isEmptyObject([       ])).toBeFalsy();
        expect(isEmptyObject(() => "a")).toBeFalsy();
    });
});