// import =================================================== //
import type { isEmptyObject as isEmptyObjectType } from "./types";

// main ===================================================== //
export const isEmptyObject: isEmptyObjectType = (obj) => (
    Object.entries(obj).length === 0 ||
    obj.constructor !== Object
);