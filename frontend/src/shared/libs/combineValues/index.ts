// import =================================================== //
import type { combineValues as combineValuesType } from "./types";

// main ===================================================== //
export const combineValues: combineValuesType = (prev, cur) => {
    if (
        typeof prev !== typeof cur ||
        typeof prev === undefined  ||
        typeof prev === null
    ) {
        return prev;
    } else {
        if (typeof prev !== "object") {
            if (typeof prev === "string") {
                return prev + " " + cur;
            } else {
                return cur;
            }
        } else {
            if (Array.isArray(prev)) {
                return prev.concat(cur);
            } else {
                let result = prev;
                for (let key in cur) {
                    let value = cur[key];
                    if (!prev[key]) {
                        prev[key] = value;
                    } else {
                        prev[key] = combineValues( prev[key], value );
                    }
                }
                return result;
            }
        }
    }
};