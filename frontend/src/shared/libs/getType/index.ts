// import =================================================== //
import type { ValueType, getType as getTypeType } from "./types"

// main ===================================================== //
export const getType: getTypeType = (value) => {
    let type = typeof value;

    if (type === "object") {
        return (
            Object.prototype.toString
                .call(value)   // [object Array]  | <--
                .slice(8, -1)  // Array           | <-- Example
                .toLowerCase() // array           | <--
        ) as ValueType;
    } else{
        return type;
    }

};