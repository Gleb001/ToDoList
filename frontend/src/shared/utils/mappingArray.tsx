// react ==================================================== //
import React from "react";
import type { ReactNode, FC } from "react";

// types ==================================================== //
type mappingArrayType = <Type>(
    array: (Type & {id: string | number})[],
    Component: FC<Type>
) => ReactNode

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