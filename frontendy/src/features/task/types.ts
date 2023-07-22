// import types =========================================== //
import { FC } from "react";
import { TaskType as TaskDataType } from "@shared/types/tasks";

// main =================================================== //
type TaskType = FC<TaskDataType>

// export ================================================= //
export default TaskType;

// // handle events ========================================== //
// export type HandleMouseEventsType = {

//   scroll_func(): void
//   motion_timeout: ReturnType<typeof setTimeout> | null,
//   move: ((event: MouseEvent) => void) | null,

//   down(event: MouseEventHandler<HTMLDivElement>): void,
//   up(event: MouseEventHandler<HTMLDivElement>): void,
//   leave(event: MouseEventHandler<HTMLDivElement>): void

// }
// export type DropZoneParametersType = {

//   html: HTMLDivElement | null,

//   _isMoreTask(value: number, task: HTMLElement): boolean,
//   checkPosition(current_y_position: number): void,
//   task_environment: {
//     low_task: HTMLElement | null,
//     high_task: HTMLElement | null
//   },

//   create(height: number): HTMLDivElement,

// }

// // components ============================================= //
// export type FunctionTextTaskType = FunctionComponent<{
//   text_task: TaskType["text"],
//   handleEdit: (text: string) => Promise<Response>
// }>
// export type FunctionTaskType = FunctionComponent<{
//   data_task: TaskType,
//   handleDelete: () => any,
// }>
// export type FunctionDropZone = FunctionComponent<{
//   height: number,
// }>