// import ==================================================== //
import type { Task } from "@shared/types/tasks";
import type { initialState as initialStateType } from "@app/redux/types";

// main ===================================================== //
export const initialState: initialStateType<Task[]> = {
    data: [],
    status: "pending",
    error: "",
};