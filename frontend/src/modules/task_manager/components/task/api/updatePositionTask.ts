// improt ============================================== //
import { TaskType } from "assets/types/task_type";

// main ================================================ //
export default function updatePositionTask(
    task: TaskType, new_postition: number
) {
    return fetch(
        "/api/data/task",
        {
            method: "POST",
            headers: { 'Access-Control-Allow-Headers': '*' },
            body: JSON.stringify({
                current_task: task,
                current_position: new_postition
            })
        }
    );
}