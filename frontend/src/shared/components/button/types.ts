// import =================================================== //
// react ---------------------------------------------------- //
import type { FC, ButtonHTMLAttributes } from 'react';

// main ===================================================== //
type ButtonAttributes = ButtonHTMLAttributes<HTMLButtonElement>
type Button = FC<
    ButtonAttributes &
    {
        children?: string,
    }
>

// export =================================================== //
export type { Button, ButtonAttributes };