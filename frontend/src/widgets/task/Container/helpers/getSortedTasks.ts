// import ================================================== //
// react --------------------------------------------------- //
import { ReactNode } from "react";
// types --------------------------------------------------- //
import type { Task } from "@shared/types/tasks";
// libs ---------------------------------------------------- //
import { bubbleSortArray } from "@shared/libs/bubbleSortArray";
// internal ------------------------------------------------ //
import { lowerPriorityTask, higherIsCompleteTask } from "../constants/filters";
import { getTasks } from "./getTasks";

// types ==================================================== //
type getSortedTasksType = (data: Task[]) => ReactNode                 

// main ===================================================== //
export const getSortedTasks: getSortedTasksType = (data) => {
    let sorted_tasks_on_priority = bubbleSortArray<Task>(
        data,
        lowerPriorityTask
    );
    let sorted_tasks_on_isComplete = bubbleSortArray<Task>(
        sorted_tasks_on_priority,
        higherIsCompleteTask,
    );
    return getTasks(sorted_tasks_on_isComplete);
}