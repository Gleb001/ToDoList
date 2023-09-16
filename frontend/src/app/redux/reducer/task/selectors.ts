// import =================================================== //
// redux ---------------------------------------------------- //
import type { RootStore } from "@app/redux/types";
import { createSelector } from "@reduxjs/toolkit";
// types ---------------------------------------------------- //
import type { Task } from "@shared/types/tasks";

// constants ================================================ //
const idTaskSelector = (state: RootStore, id: Task["id"]) => id

// main ===================================================== //
export const listTaskSelector = (state: RootStore) => state.tasks;
export const activeTaskByIdSelector = createSelector(
    [listTaskSelector, idTaskSelector],
    (list_tasks, id) => (
        list_tasks.data.find(task => task.id === id)
    )
);