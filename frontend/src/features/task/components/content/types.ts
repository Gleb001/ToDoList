// import types =========================================== //
import type { FC } from "react";
import type { Task } from "@shared/types/tasks";

// main =================================================== //
type ContentTask = FC<{
    data: Task,
}>

// export ================================================= //
export type { ContentTask };