// import =================================================== //
import type { FC } from "react";
import type { Task } from "@shared/types/tasks";

// main ===================================================== //
type taskEditorType = FC<{ }>
type ChangeTaskType = <T extends keyof Task>(
    param_name: T,
    value: Task[T]
) => void

// export =================================================== //
export type { taskEditorType, ChangeTaskType };