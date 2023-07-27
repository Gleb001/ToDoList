import {FC} from "react";
type TitleTaskType = FC<{
    value: string,
    change: (...args: any) => void
}>
export default TitleTaskType;