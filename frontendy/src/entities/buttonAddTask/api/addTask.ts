// import ===
// libs
import { withAPI } from "@shared/libs/withAPI"
// types ----
import {TaskType} from "@shared/types/tasks";

// types ====
type addTaskType = (data: TaskType) => Promise<boolean>

// main ================================================= //
export const addTaskRequest: addTaskType = async (data) => (
    await withAPI(
        "http://localhost:5000/tasks",
        {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }
    )
);