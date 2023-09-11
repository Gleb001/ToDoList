// import =================================================== //
import { HTMLAttributes } from "react";
import { Button } from "../..";
import { render } from "@testing-library/react";

// main ===================================================== //
export const getButton = (
    attrs: HTMLAttributes<HTMLButtonElement>,
    children: string
) => {
    const dom = render(
        <Button {...attrs} data-testid="button" >{
            children
        }</Button>
    );
    const button = dom.getByTestId("button");
    return ({
        button,
        dom
    });
}