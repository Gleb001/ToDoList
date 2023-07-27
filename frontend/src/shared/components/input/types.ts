import { FC, HTMLAttributes } from "react";

type InputType = FC<
    { initialValue: string, }
    &
    HTMLAttributes<HTMLInputElement>
>

export default InputType;