// import =================================================== //
// libs ----------------------------------------------------- //
import { isEqual } from "..";
// internal ------------------------------------------------- //
import type { isEqualArrays as isEqualArraysType } from "./types";

// main ===================================================== //
export const isEqualArrays: isEqualArraysType = (
    arr_1, arr_2
) => {
    if (arr_1 === arr_2) return true;
    if (arr_1.length !== arr_2.length) return false;
    
    for (let index = 0; index < arr_1.length; index++) {
        let isEqualValues = isEqual(arr_1[index], arr_2[index]);
        if (!isEqualValues) return false;
    }
    return true;
}