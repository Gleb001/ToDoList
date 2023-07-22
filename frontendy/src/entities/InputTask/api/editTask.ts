// import ===
// libs
import { withAPI } from "@shared/libs/withAPI"
// types ----
import {TaskType} from "@shared/types/tasks";

// types ====
type editTaskType = (data: TaskType) => Promise<boolean>

// main ================================================= //
export const editTaskRequest: editTaskType = async (data) => (
    await withAPI(
        "http://localhost:5000/tasks",
        {
            method: "PATCH",
            mode: "cors",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }
    )
);