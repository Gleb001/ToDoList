// import types =========================================== //
import { FunctionComponent } from "react";
import { DataTaskType } from "assets/types/task_type"

// handle events ========================================== //
// type MouseEventType = React.MouseEvent<HTMLDivElement, MouseEvent>
// export type HandleMouseEventsType = {
//     move(event: MouseEventType): void,
//     down(event: MouseEventType): void,
//     up(event: MouseEventType): void,
// }

// components ============================================= //
export type FunctionTextTaskType = FunctionComponent<{
    text_task: DataTaskType["text"],
    handleEdit: (text: string) => Promise<Response>
}>
export type FunctionTaskType = FunctionComponent<{
    task: DataTaskType,
    handleDelete: () => any
}>