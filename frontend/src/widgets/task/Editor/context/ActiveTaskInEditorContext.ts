// import =================================================== //
// react ---------------------------------------------------- //
import { createContext } from "react";
// types ---------------------------------------------------- //
import type { Task } from "@shared/types/tasks";

// main ===================================================== //
export const ActiveTaskInEditorContext = createContext<Task>({} as Task);