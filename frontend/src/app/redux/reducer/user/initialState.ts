// imports =================================================== //
// types ----------------------------------------------------- //
import type { User } from "@shared/types/user";

// types ===================================================== //
interface initialStateType {
    data: User,
    status: 'pending' | 'loading' | 'succeeded' | 'failed',
    error: string,
}

// main ===================================================== //
export const initialState: initialStateType = {
    data: {
        theme: "light",
        view_tasks: "list",
        isAutoDeleteTaskAfterComplete: false,
    },
    status: 'pending',
    error: "",
};
