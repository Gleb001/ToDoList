// main ===================================================== //
// types ---------------------------------------------------- //
import type { ReactNode, FC, HTMLAttributes } from "react";

// main ===================================================== //
type Wrapper = FC<
    HTMLAttributes<HTMLDivElement>
>
type Field = FC<
    HTMLAttributes<HTMLDivElement> &
    {
        name: string,
        children: ReactNode,
    }
>
interface Setting {
    Field: Field,
    Wrapper: Wrapper
}

// export =================================================== //
export type { Setting, Wrapper, Field };