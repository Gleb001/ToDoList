// type ================================================ //
type editTaskType = <TaskType, Key extends keyof TaskType>(
    task: TaskType & { id: any },
    key: Key,
    new_value: TaskType[Key]
) => Promise<Response>

// main ================================================ //
export const editTask: editTaskType = (task, key, new_value) => {
    return fetch("/api/data/task", {
        method: "PATCH",
        headers: { 'Access-Control-Allow-Headers': '*' },
        body: JSON.stringify({
            id: task.id, 
            key: key,
            new_value: new_value
        })
    }).then(response => response.json());
}