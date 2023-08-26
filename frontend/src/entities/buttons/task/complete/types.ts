// import =================================================== //
import type { FC } from "react";
import type { Task } from "@shared/types/tasks";

// main ===================================================== //
type ButtonRemoveTask = FC<{
    isComplete: Task["isComplete"],
    isPriority: Task["isPriority"],
    taskId: Task["id"]
}>

// export =================================================== //
export type { ButtonRemoveTask };