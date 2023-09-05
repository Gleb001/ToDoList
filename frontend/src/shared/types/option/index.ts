// import =================================================== //
import type { HTMLAttributes } from 'react';

// main ===================================================== //
interface Option<T = any> extends HTMLAttributes<HTMLOptionElement> {
    value: T,
    text: string,
}

// export =================================================== //
export type { Option };