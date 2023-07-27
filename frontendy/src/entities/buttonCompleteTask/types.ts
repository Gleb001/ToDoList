import {FC} from "react";

type ButtonRemoveTaskType = FC<{
    isComplete: boolean,
    isPriority: boolean,
    indexTask: number
}>

export default ButtonRemoveTaskType;