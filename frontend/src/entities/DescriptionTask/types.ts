import {FC, HTMLAttributes} from "react";

type DescriptionTaskType = FC<{
    value: string,
    change: (...args: any) => void,
}>

export default DescriptionTaskType;