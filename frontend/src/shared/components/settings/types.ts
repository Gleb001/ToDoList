// main ===================================================== //
// types ---------------------------------------------------- //
import type { ReactNode, FC, Component } from "react";

// main ===================================================== //
type Wrapper = FC<{
    children: ReactNode[]
}>
type Field = FC<{
    name: string,
    children: ReactNode,
}>
interface Setting {
    Field: Field,
    Wrapper: Wrapper
}

// export =================================================== //
export type { Setting, Wrapper, Field };