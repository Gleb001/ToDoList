// import =================================================== //
// react ---------------------------------------------------- //
import type { FC, HTMLAttributes } from 'react';

// main ===================================================== //
type Wrapper = FC<
    HTMLAttributes<HTMLDivElement>
>
type Header = FC<
    HTMLAttributes<HTMLDivElement> &
    {
        name?: string,
    }
>
type Main = FC<
    HTMLAttributes<HTMLDivElement>
>
interface ActionWindow {
    Wrapper: Wrapper,
    Header: Header,
    Main: Main
}

// export =================================================== //
export type { ActionWindow };