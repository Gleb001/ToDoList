// import =================================================== //
import type { FC } from "react";
import type { Task } from "@shared/types/tasks";

// main ===================================================== //
type ButtonRemoveTask = FC<{
    isComplete: Task["isComplete"],
    isPriority: boolean,
    taskId: Task["id"],
}>

// export =================================================== //
export type { ButtonRemoveTask };