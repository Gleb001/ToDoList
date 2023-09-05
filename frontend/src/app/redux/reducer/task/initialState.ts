// import ==================================================== //
import type { Task } from "@shared/types/tasks";
import type { initialState as initialStateType } from "@app/redux/types";

// types ==================================================== //
interface initialState {
    active: initialStateType<Task | {}>,
    list: initialStateType<Task[]>
}

// main ===================================================== //
export const initialState: initialState = {
    active: {
        data: {},
        status: "pending",
        error: "",
    }, 
    list: {
        data: [],
        status: "pending",
        error: "",
    }
};