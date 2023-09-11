// import =================================================== //
import { describe, expect, test } from "@jest/globals";
import uniqueId from "..";

// main ===================================================== //
describe("Testing uniqueId in @shared/libs", () => {
    test("equality id", () => {
        expect(uniqueId()).toMatch(/^id-[a-zA-Z0-9]{13,15}$/);
    });
});