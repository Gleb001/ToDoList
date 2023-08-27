// import =================================================== //
import type { HTMLAttributes } from 'react';

// main ===================================================== //
interface Option extends HTMLAttributes<HTMLOptionElement> {
    value: string,
}

// export =================================================== //
export type { Option };