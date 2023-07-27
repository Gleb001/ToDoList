// types
type inRangeType = (value: number, min: number, max: number) => number

// main
export const inRange: inRangeType = (value, min, max) => (
    value < min ? min :
    value > max ? max :
    value
);