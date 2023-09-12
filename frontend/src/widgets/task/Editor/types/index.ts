// import =================================================== //
import type { FC } from "react";
import { Task } from "@shared/types/tasks";

// main ===================================================== //
type ChangeTaskType = <T extends keyof Task>(
    param_name: T,
    value: Task[T]
) => void

// export =================================================== //
export type { ChangeTaskType };