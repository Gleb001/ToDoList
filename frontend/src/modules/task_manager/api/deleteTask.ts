// import ================================================= //
import uuid from "react-uuid"

// export ================================================= //
export default function deleteTask<TypeTask>(
    task: TypeTask & { id: ReturnType<typeof uuid> }
): Promise<TypeTask[]> {
    return fetch("/api/data/list_tasks", {
        method: "DELETE",
        headers: { 'Access-Control-Allow-Headers': '*' },
        body: JSON.stringify({ id: task.id })
    }).then(response => response.json());
} 