// import =================================================== //
// libs ----------------------------------------------------- //
import { describe, expect, test } from "@jest/globals";
import { Select } from "..";
import { render } from "@testing-library/react";
// internal ------------------------------------------------- //
import { fakeData } from "./constants/fakeData";
import { checkOptions } from "./helpers/checkOptions";

// main ===================================================== //
describe("Testing Select in @shared/components", () => {
    test("select with data", () => {
        const dom = render(
            <Select
                data={fakeData}
                id="select"
                data-testid="select"
            />
        );
        const select = dom.getByTestId("select");

        expect(select.children).toHaveLength(fakeData.length);
        checkOptions(select, fakeData);
    });
});