// import =================================================== //
import { describe, expect, test, it } from "@jest/globals";
import { render, fireEvent } from "@testing-library/react";
import { ActionWindow } from "..";
import { checkAttrubutes } from "@shared/libs/checkAttributes";
import { attributes } from "../constants/attributes";

// main ===================================================== //
describe("Testing actionWindow in @shared/components", () => {
    test("wrapper component", () => {
        const children = "Hello world";
        const dom = render(
            <ActionWindow.Wrapper data-testid="wrapper" {...attributes}>{
                children
            }</ActionWindow.Wrapper>
        );
        const wrapper = dom.getByTestId("wrapper");

        checkAttrubutes(wrapper, attributes);
        expect(wrapper.innerHTML).toBe(children);
    });
    test("wrapper main", () => {
        const children = "Hello world";
        const dom = render(
            <ActionWindow.Main data-testid="main" {...attributes}>{
                children
            }</ActionWindow.Main>
        );
        const main = dom.getByTestId("main");

        checkAttrubutes(main, attributes);
        expect(main.innerHTML).toBe(children);
    });
    test("wrapper header", () => {
        const attrs = {
            name: "Any name",
            ...attributes
        };
        const children = (
            <>
                <button>Add</button>
                <button>Delete</button>
            </>
        );
        const dom = render(
            <ActionWindow.Header data-testid="header" {...attrs}>{
                children
            }</ActionWindow.Header>
        );
        const header = dom.getByTestId("header");
        const headerChildren = header.children;

        checkAttrubutes(header, attributes);
        expect(headerChildren[1].innerHTML).toBe(attrs.name);
        expect(headerChildren[0].children).toHaveLength(children.props.children.length);
    });
});