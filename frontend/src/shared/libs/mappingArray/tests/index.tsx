// import =================================================== //
// react ---------------------------------------------------- //
import type { FC } from "react";
// jest ----------------------------------------------------- //
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
// internal ------------------------------------------------- //
import { mappingArray } from "..";
import { data } from "./constants/data";

// main ===================================================== //
describe("Testing mappingArray in @shared/libs", () => {
    const Component: FC<{ name: string }> = ({ name }) => <h1>{name}</h1>;
    test("get todos", () => {
        const TodosElements = mappingArray(data, Component);
        const dom = render(<>{ TodosElements }</>);
        const todos = dom.container.getElementsByTagName("h1");

        for (let index = 0; index < data.length; index++) {
            expect(todos[index]).toHaveTextContent(data[index].name);
        }
    });
    test("get empty todos", () => {
        const TodosElements = mappingArray([], Component)
        const dom = render(<>{ TodosElements }</>);
        expect(dom.container.innerHTML).toBe("");
    });
});