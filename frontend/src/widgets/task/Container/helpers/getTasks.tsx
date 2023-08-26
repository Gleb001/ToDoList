// import =================================================== //
// react ---------------------------------------------------- //
import React from "react";
import type { ReactNode } from "react";
// components ----------------------------------------------- //
import { Task } from "@features/task";
// types ---------------------------------------------------- //
import type { Task as TaskType } from "@shared/types/tasks";

// types ==================================================== //
type getTasksType = (data: TaskType[]) => ReactNode

// main ===================================================== //
export const getTasks: getTasksType = (data) => {
    if (data.length > 0) {
        return (
            data.map(
                (task, index) => <Task index={index} key={task.id} data={task} />
            )
        );
    } else {
        return (
            <h1>У вас нет задач! Вы свободный человек</h1>
        );
    }
}