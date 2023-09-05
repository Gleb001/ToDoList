// import =================================================== //
import type { inRange as inRangeType } from "./types";

// main ===================================================== //
export const inRange: inRangeType = (value, min, max) => (
    value < min ? min :
    value > max ? max :
    value
);