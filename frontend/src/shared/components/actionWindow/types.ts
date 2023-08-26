// import =================================================== //
// react ---------------------------------------------------- //
import type { FC, ReactNode } from 'react';

// main ===================================================== //
type Wrapper = FC<{
    children: ReactNode
}>
type Header = FC<{
    children: ReactNode
}>
type Main = FC<{
    children: ReactNode
}>
interface ActionWindow {
    Wrapper: Wrapper,
    Header: Header, 
    Main: Main
}

// export =================================================== //
export type { ActionWindow };