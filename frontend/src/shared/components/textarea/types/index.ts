// import =================================================== //
import { FC, HTMLAttributes } from "react";

// main ===================================================== //
type TextAreaType = FC<
    HTMLAttributes<HTMLTextAreaElement> &
    {
        disabled?: boolean,
        initialValue?: string,
    }
>

// export =================================================== //
export type { TextAreaType };