// main ===================================================== //
type ValueType = (
    // default - primitive
    "string"    |
    "number"    |
    "bigint"    |
    "undefined" |
    "boolean"   |
    "symbol"    |
    // special - object
    "array"     |
    "object"    |
    "null"      |
    "function"
)

type getType = (value: any) => ValueType

// export =================================================== //
export type { getType, ValueType };