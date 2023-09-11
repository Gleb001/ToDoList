// import =================================================== //
import { describe, expect, it } from "@jest/globals";
import { isObject } from "..";

// main ===================================================== //
describe("Testing isObject in @shared/libs/workWithObjects/isObject", () => {
    it("is object", () => {
        expect(isObject({       })).toBeTruthy();
        expect(isObject({ a: 1  })).toBeTruthy();
    });
    it("is not object", () => {
        expect(isObject([       ])).toBeFalsy();
        expect(isObject("1111111")).toBeFalsy();
        expect(isObject(111111111)).toBeFalsy();
        expect(isObject(null     )).toBeFalsy();
        expect(isObject(undefined)).toBeFalsy();
        expect(isObject(false    )).toBeFalsy();
        expect(isObject(() => "a")).toBeFalsy();
    });
});