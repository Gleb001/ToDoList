// import =================================================== //
// react ---------------------------------------------------- //
import React from "react";
import type { FC } from "react";
// jest ----------------------------------------------------- //
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
// internal ------------------------------------------------- //
import { mappingArray } from "..";

// main ===================================================== //
describe("Testing mappingArray in @shared/libs", () => {
    const Component: FC<{ name: string }> = ({ name }) => <h1>{name}</h1>;
    test("get todos", () => {
        const data = [
            {
                id: "1",
                name: "First"
            },
            {
                id: "2",
                name: "Second"
            },
            {
                id: "3",
                name: "Third"
            },
        ];
        const TodosElements = mappingArray(data, Component);

        const dom = render(<>{ TodosElements }</>);
        const todos = dom.container.getElementsByTagName("h1");

        expect(todos).toHaveLength(3);
        expect(todos[0]).toHaveTextContent("First");
        expect(todos[1]).toHaveTextContent("Second");
        expect(todos[2]).toHaveTextContent("Third");
    });
    test("get empty todos", () => {
        const TodosElements = mappingArray([], Component)

        const dom = render(<>{ TodosElements }</>);
        const todos = dom.container.getElementsByTagName("h1");

        expect(todos).toHaveLength(0);
        expect(dom.container.innerHTML).toBe("");
    });
});