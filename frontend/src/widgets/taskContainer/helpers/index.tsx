// import
import React, { ReactNode } from "react";
import { ButtonCompleteTask } from "@entities/buttonCompleteTask";
import Task from "@features/task";
import { TaskType } from "@shared/types/tasks";

// main
export function getTasks(data: TaskType[]): ReactNode {
    if (data.length) {
        return (
            data.map(
                (task, index) =>
                    <Task
                        key={task.id}
                        index={index}
                        data={task}
                    />
            )
        )
    } else {
        return (
            <h1>У вас нет задач! Вы свободный человек</h1>
        );
    }
}