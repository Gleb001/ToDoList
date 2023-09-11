// import =================================================== //
import type { ValueType, getType as getTypeType } from "./types"

// main ===================================================== //
export const getType: getTypeType = (value) => {
    let type = typeof value;

    if (Array.isArray(value)) {
        return "array";
    } else if (value === null) {
        return "null";
    } else {
        return type;
    }

};