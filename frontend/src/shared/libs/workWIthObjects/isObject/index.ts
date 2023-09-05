// import =================================================== //
import type { isObject as isObjectType } from "./types";

// main ===================================================== //
export const isObject: isObjectType = (value) => (
    typeof value === "object" &&
    !Array.isArray(value) &&
    value !== null
);