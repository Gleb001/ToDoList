// import =================================================== //
// import type { HTMLAttributes } from "react";

// main ===================================================== //
// type Attributes = HTMLAttributes<HTMLElement>
// type combineAttributesType = (...attrs: Attributes[]) => Attributes
type combineValuesType = <T>(prev: T | any, cur: T | any) => T

// export =================================================== //
export type {
    // combineAttributesType,
    combineValuesType
};