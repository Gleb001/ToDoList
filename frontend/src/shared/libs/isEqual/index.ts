// import =================================================== //
// lib ------------------------------------------------------ //
import { getType } from "../getType";
import { isEqualArrays } from "./isEqualArrays";
import { isEqualObjects } from "./isEqualObjects";
// internal ------------------------------------------------- //
import type { isEqual as isEqualType } from "./types"

// main ===================================================== //
export const isEqual: isEqualType = (value_1, value_2) => {
    let general_type = getType(value_1);
    if (general_type !== getType(value_2)) return false;

    switch (general_type) {
        case "array":  return isEqualArrays(value_1, value_2);
        case "object": return isEqualObjects(value_1, value_2);
        default:       return (value_1 === value_2);
    }
}