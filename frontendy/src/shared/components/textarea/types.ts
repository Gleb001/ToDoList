import { FC, HTMLAttributes } from "react";

type TextAreaType = FC<
    { initialValue: string, max_rows?: number }
    &
    HTMLAttributes<HTMLTextAreaElement>
>

export default TextAreaType;