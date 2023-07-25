// import types =========================================== //
import { FC } from "react";
import { TaskType as TaskDataType } from "@shared/types/tasks";

// main =================================================== //
type TaskType = FC<TaskDataType & {index: number}>

// export ================================================= //
export default TaskType;