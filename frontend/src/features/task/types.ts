// import types =========================================== //
import { FC } from "react";
import { TaskType as TaskDataType } from "@shared/types/tasks";

// main =================================================== //

type TaskType = FC<{
    index: number,
    data: TaskDataType,
}>

// export ================================================= //
export default TaskType;