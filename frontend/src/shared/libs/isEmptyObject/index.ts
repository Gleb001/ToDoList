// import =================================================== //
import type { isEmptyObject as isEmptyObjectType } from "./types";

// main ===================================================== //
export const isEmptyObject: isEmptyObjectType = (obj) => (
    !Array.isArray(obj)              && // is not array
    obj.constructor === Object       && // is object
    Object.keys(obj).length === 0    // hasn't keys
);