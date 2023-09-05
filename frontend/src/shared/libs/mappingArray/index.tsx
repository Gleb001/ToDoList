// react ==================================================== //
// react ---------------------------------------------------- //
import React from "react";
// internal ------------------------------------------------- //
import type { mappingArray as mappingArrayType } from "./types";

// main ===================================================== //
export const mappingArray: mappingArrayType = (
    array, Component
) => (
    <>{
        array.map(item => {
            <Component key={item.id} {...item} />;
        })
    }</>
)