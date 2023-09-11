// main ===================================================== //
// react ---------------------------------------------------- //
import React from "react";
// types ---------------------------------------------------- //
import type { ReactNode } from "react"
import type { Option } from "@shared/types/option";

// types ==================================================== //
type getOptionsType = (options: Option[]) => ReactNode

// main ===================================================== //
export const getOptions: getOptionsType = (options) => (
    options.map(
        (option_attrs, index) => (
            <option key={option_attrs.text + index} {...option_attrs} >{
                option_attrs.text
            }</option>
        )
    )
);