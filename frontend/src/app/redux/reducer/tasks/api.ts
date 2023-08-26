// import =================================================== //
//redux ----------------------------------------------------- //
import type { AsyncThunkPayloadCreator } from "@reduxjs/toolkit";
// libs ----------------------------------------------------- //
import { withAPI } from "@shared/libs/withAPI";
// types ---------------------------------------------------- //
import type { Task, DataTask } from "@shared/types/tasks";

// constants ================================================ //
const PATH_TO_TASKS = "http://localhost:5000/api/tasks";

// types ==================================================== //
type getTasksAPIType = AsyncThunkPayloadCreator<any>
type patchTaskAPIType = AsyncThunkPayloadCreator<any, DataTask>
type deleteTaskAPIType = AsyncThunkPayloadCreator<any, Task["id"]>
type postTaskAPIType = AsyncThunkPayloadCreator<any, Task>
type putTasksAPIType = AsyncThunkPayloadCreator<any, { old_index: number, new_index: number }>

// main ===================================================== //
export const getTasksAPI: getTasksAPIType = async () => (
    await withAPI(PATH_TO_TASKS)
);
export const putTasksAPI: putTasksAPIType = async (data, thunkAPI) => (
    await withAPI(
        PATH_TO_TASKS,
        {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data, null, 2)
        }
    )
);
export const postTaskAPI: postTaskAPIType = async (data, thunkAPI) => (
    await withAPI(
        PATH_TO_TASKS,
        {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data, null, 2)
        }
    )
);
export const patchTaskAPI: patchTaskAPIType = async (data, thunkAPI) => (
    await withAPI(
        PATH_TO_TASKS,
        {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data, null, 2)
        }
    )
);
export const deleteTaskAPI: deleteTaskAPIType = async (id, thunkAPI) => (
    await withAPI(
        PATH_TO_TASKS,
        {
            method: "DELETE",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id }, null, 2)
        }
    )
);