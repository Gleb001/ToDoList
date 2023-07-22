// import
import { withAPI } from "@shared/libs/withAPI"
// types
type deleteTaskType = (id: string) => Promise<boolean>

// main ================================================= //
export const deleteTask: deleteTaskType = async (id) => (
    await withAPI(
        "http://localhost:5000/tasks",
        {
            method: "DELETE",
            mode: "cors",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id })
        }
    )
);