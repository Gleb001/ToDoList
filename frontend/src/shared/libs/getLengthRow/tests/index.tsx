// import =================================================== //
import { describe, expect, jest, test } from "@jest/globals";
import { getLengthRow } from "..";

// additional =============================================== //
// empty analog computedStyleMap()
function getComputedStyleMap(wait_prop: string, value: number, unit: string) {
    return (
        () => ({
            get: (prop: string) => (
                wait_prop === prop ?
                    { value, unit } :
                    {}
            )
        })
    );
}

// main ===================================================== //
describe("Testing getLengthRow in @shared/libs", () => {

    let mockElement: HTMLElement;
    beforeAll(() => {
        mockElement = document.createElement("input");
        mockElement.id = "input";
        document.body.appendChild(mockElement);
    });

    test("get length row in input element", () => {
        mockElement.computedStyleMap = getComputedStyleMap("font-size", 16, "px") as any;
        mockElement.getBoundingClientRect = () => ({ width: 100 }) as DOMRect;
        expect(getLengthRow(mockElement)).toBe(11);
    });

    test("get length row in none element", () => {
        expect(getLengthRow(undefined)).toBe(0);
    });

});