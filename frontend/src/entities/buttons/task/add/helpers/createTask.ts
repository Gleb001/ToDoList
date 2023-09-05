// import =================================================== //
// libs ----------------------------------------------------- //
import uniqueId from "@shared/libs/uniqueId"
// types ---------------------------------------------------- //
import { Task } from "@shared/types/tasks"

// types ==================================================== //
type CreateTaskType = () => Task

// main ===================================================== //
export const CreateTask: CreateTaskType = () => (
    {
        id: uniqueId(),
        title: "",
        description: "",
        priority: 0,
        isComplete: false,
    }
);