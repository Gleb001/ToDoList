// import ==================================================== //
import type { Task } from "@shared/types/tasks";

// types ===================================================== //
interface initialStateType {
    data: Task[],
    status: 'pending' | 'loading' | 'succeeded' | 'failed',
    error: string,
}

// main ===================================================== //
export const initialState: initialStateType = {
    data: [],
    status: 'pending',
    error: "",
};
