// import =================================================== //
import { getType } from "../getType";
import type { concatObjects as concatObjectsType } from "./types";

// main ===================================================== //
export const concatObjects: concatObjectsType = (prev, cur) => {
    if (Array.isArray(prev) || Array.isArray(cur)) return {};

    let result = {};
    let keys = [...Object.keys(prev), ...Object.keys(cur)];
    for (let key of keys) {

        let value_cur = cur[key];
        let value_prev = prev[key];
        let type_value_cur = getType(value_cur);
        let type_value_prev = getType(value_prev);

        let haveValueCur = (type_value_cur !== "undefined" && type_value_cur !== "null");
        let haveValuePrev = (type_value_prev !== "undefined" && type_value_prev !== "null");
        if (!haveValueCur && !haveValuePrev) break;

        if (!haveValuePrev) {
            result[key] = value_cur;
        } else if (!haveValueCur) {
            result[key] = value_prev;
        } else {
            switch (type_value_cur) {
                case "object":
                    result[key] = concatObjects(value_cur, value_prev);
                    break;
                case "array":
                    result[key] = [...value_prev, ...value_cur];
                    break;
                case "string":
                    result[key] = value_prev + " " + value_cur;
                    break;
                default:
                    result[key] = value_prev;
                    break;
            }
        }

    }
    return result;
};