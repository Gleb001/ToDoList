// import ===
// libs
import { withAPI } from "@shared/libs/withAPI"
// types ----
import {TaskType} from "@shared/types/tasks";

// types ====
type addTaskType = () => Promise<TaskType[]>

// main ================================================= //
export const getTasks: addTaskType = async () => (
    await withAPI("http://localhost:5000/tasks")
);