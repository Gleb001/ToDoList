// import =================================================== //
import type { FC, HTMLAttributes } from "react";

// main ===================================================== //
type InputType = FC<
    { initialValue: string, } &
    HTMLAttributes<HTMLInputElement>
>

// export =================================================== //
export default InputType;