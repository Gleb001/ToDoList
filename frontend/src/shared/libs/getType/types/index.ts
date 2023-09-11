// main ===================================================== //
type ValueType = (
    // default - primitive
    "string"    |
    "number"    |
    "bigint"    |
    "undefined" |
    "boolean"   |
    "symbol"    |
    "null"      |
    // special - object
    "array"     |
    "object"    |
    "function"
)

type getType = (value: any) => ValueType

// export =================================================== //
export type { getType, ValueType };