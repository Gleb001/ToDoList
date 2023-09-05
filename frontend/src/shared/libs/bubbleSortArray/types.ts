// main ===================================================== //
type Condition<T = any> = (a: T, b: T) => boolean
type bubbleSortArrayType = <T = any>(tasks: T[], ...conditions: (Condition<T>)[]) => T[]

// export =================================================== //
export type { Condition, bubbleSortArrayType };