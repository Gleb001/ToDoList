// imports ================================================ //
import __shellRequest from "../utils/work_with_api";
import {TaskType} from "../types/task"

// constants ============================================== //
const tasks_path = "/api/data/tasks";
const task_path = tasks_path + "/task"

// main =================================================== //
function responseGetTasks(): Promise<TaskType[]> {
    return __shellRequest(fetch(tasks_path));
};
function responseAddTask(): Promise<TaskType[]> {
    return __shellRequest(
        fetch(tasks_path, {
            method: "POST",
            headers: { 'Access-Control-Allow-Headers': '*' },
            body: JSON.stringify({ text: "New TaskType!", status: "no_active" })
        })
    );
};
function responseChangeTask<
    Key extends keyof TaskType,
    Value extends TaskType[Key]
>(id: TaskType["id"], key: Key, new_value: Value): Promise<TaskType> {
    return __shellRequest(
        fetch(task_path, {
            method: "POST",
            headers: { 'Access-Control-Allow-Headers': '*' },
            body: JSON.stringify({ id: id, [key]: new_value })
        })
    );
}
function responseDeleteTask(id: TaskType["id"]) {
    return __shellRequest(
        fetch(tasks_path, {
            method: "DELETE",
            headers: { 'Access-Control-Allow-Headers': '*' },
            body: JSON.stringify({ id: id })
        })
    );
}

// export ================================================= //
export {
    responseGetTasks,
    responseAddTask,
    responseChangeTask,
    responseDeleteTask
};