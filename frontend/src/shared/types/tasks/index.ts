// import =================================================== //
import { isObject } from "@shared/libs/isObject";
import { isEmptyObject } from "@shared/libs/isEmptyObject";

// main ===================================================== //
type Priority = 0 | 1 | 2 | 3
interface Task {
    id: string,
    title: string,
    description: string,
    priority: Priority,
    isComplete: boolean,
}
interface DataTask {
    index: number,
    data: Task
}
type isTaskType = (obj: any) => obj is Task

// checks --------------------------------------------------- //
// @ts-ignore: typescript is a bit buggy, perceives the returned
// boolean not as an isTaskType type
export const isTask: isTaskType = (obj) => (
    isObject(obj) &&
    !isEmptyObject(obj)
)

// export =================================================== //
export type { Task, DataTask, Priority };