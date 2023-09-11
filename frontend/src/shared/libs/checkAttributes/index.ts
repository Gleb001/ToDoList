// import =================================================== //
import { expect } from "@jest/globals"
import { HTMLAttributes } from "react";

// types ==================================================== //
type checkAttrubutes = <T extends HTMLElement>(
    element: T,
    attrs: HTMLAttributes<T>
) => void

// main ===================================================== //
export const checkAttrubutes: checkAttrubutes = (
    element,
    attrs
) => {
    for (const name_attr in attrs) {
        const name = name_attr.toLowerCase();

        let element_prop = element[name];
        let attr_prop = attrs[name];
        if (typeof element_prop === "function") {
            element_prop = JSON.stringify(element_prop);
            attr_prop = JSON.stringify(attr_prop);
        }

        expect(String(element_prop)).toEqual(String(attr_prop));
    }
};