// import ==================================================== //
import type { Task } from "@shared/types/tasks";

// types ==================================================== //
type initialStateType = {
    [key in keyof Task]?: Task[key]
}

// main ===================================================== //
export const initialState: initialStateType = {};