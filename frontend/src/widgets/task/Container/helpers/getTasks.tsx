// import =================================================== //
// react ---------------------------------------------------- //
import React from "react";
import type { ReactNode } from "react";
// components ----------------------------------------------- //
import { Task } from "@features/task";
// types ---------------------------------------------------- //
import type { Task as TaskType } from "@shared/types/tasks";
import { mappingArray } from "@shared/libs/mappingArray";

// types ==================================================== //
type MappingDataTask = { id: TaskType["id"], index: number, data: TaskType }
type getTasksType = (data: TaskType[]) => ReactNode
type getDataTask = (data: TaskType[]) => MappingDataTask[]

// main ===================================================== //
const getDataTask: getDataTask = (initial_data) => (
    initial_data.map(
        (data, index) => ({
            index,
            id: data.id,
            data
        })
    )
)
export const getTasks: getTasksType = (data) => (
    data.length > 0 ?
        mappingArray(getDataTask(data), Task) :
        <h1>У вас нет задач! Вы свободный человек</h1>
);