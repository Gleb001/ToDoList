// import =================================================== //
// libs ----------------------------------------------------- //
import { isEqual } from "..";
import { isEqualArrays } from "../isEqualArrays";
// types ---------------------------------------------------- //
import type { isEqualObjects as isEqualObjectsType } from "./types";

// main ===================================================== //
export const isEqualObjects: isEqualObjectsType = (
    obj_1, obj_2
) => {
    if (obj_1 === obj_2) return true;
    if (Array.isArray(obj_1) && Array.isArray(obj_2)) return isEqualArrays(obj_1, obj_2);

    for (let key in obj_1) {
        let isEqualValues = isEqual(obj_1[key], obj_2[key]);
        if (!isEqualValues) return false;
    }
    return true;
}