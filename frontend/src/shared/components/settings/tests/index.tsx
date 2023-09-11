// import =================================================== //
import { describe, expect, test } from "@jest/globals";
import { Settings } from "..";
import { render, screen } from "@testing-library/react";

// main ===================================================== //
describe("Testing Settings in @shared/components", () => {
    test("wrapper settings", () => {
        const dom = render(
            <Settings.Wrapper data-testid="wrapper">
                <Settings.Field name="1 поле">
                    <input type="text" />
                </Settings.Field>
            </ Settings.Wrapper>
        );
        const wrapper = dom.getByTestId("wrapper");

        expect(wrapper.children).not.toHaveLength(0);
        expect(wrapper.children[0]).toBeInstanceOf(HTMLElement);
    });
    test("field settings", () => {
        const fieldName = "Test";
        const dom = render(
            <Settings.Field data-testid="field" name={fieldName} >
                <input type="text" />
            </Settings.Field>
        );
        const field = dom.getByTestId("field");

        expect(field.children).not.toHaveLength(0);
        expect(dom.queryByText(fieldName)).not.toBeNull();
    });
});