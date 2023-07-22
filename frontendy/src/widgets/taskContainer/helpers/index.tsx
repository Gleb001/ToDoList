// import
// react
import React from "react";
// components
import Task from "../../../features/task";
// internal
import { TaskType } from "@shared/types/tasks";

// types
type getTasksType = (tasks: TaskType[]) => React.ReactNode

// main
export const getTasksElements: getTasksType = (tasks) => (
    <>{
        tasks.map(task => (
            <Task
                key={task.id}
                id={task.id}
                name={task.name}
            />
        ))
    }</>
);