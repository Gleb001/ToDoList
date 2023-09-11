// import =================================================== //
import type { bubbleSortArrayType } from "./types";

// main ===================================================== //
export const bubbleSortArray: bubbleSortArrayType = (
    array, ...conditions
) => {
    if (array.length <= 1) return array;
    if (conditions.length === 0) conditions = [(a, b) => a > b]; 

    let result = [...array];
    let length_subarray = array.length;
    while (length_subarray > 1) {

        for (let index = 1; index < length_subarray; index++) {
            let left = result[index - 1];
            let right = result[index];

            let isChange = conditions.some(
                condition => condition(left, right)
            );

            if (isChange) {
                result[index - 1] = right;
                result[index] = left;
            }
        }
        length_subarray--;

    }
    return result;
}