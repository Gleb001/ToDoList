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

    let keys = [
        ...Object.keys(obj_1),
        ...Object.keys(obj_2),
    ];
    for (let key of keys) {
        // @ts-ignore
        if (!isEqual(obj_1[key], obj_2[key])) return false;
    }
    return true;
}