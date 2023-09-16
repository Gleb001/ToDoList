// import =================================================== //
// types ---------------------------------------------------- //
import type { MouseEvent } from "react";
// libs ----------------------------------------------------- //
import { inRange } from "@shared/libs/inRange";
// helpers -------------------------------------------------- //
import { getTopPosition } from "./getTopPosition";
import { getMaxTopPositionTask } from "./getMaxTopPositionTask";

// types ==================================================== //
type getPositions = (
    task: HTMLElement,
    event: MouseEvent<HTMLDivElement>
) => [number, number]

// main ===================================================== //
export const getPositions: getPositions = (
    task, event
) => {
    const min_top_position = 0;
    const max_top_position = getMaxTopPositionTask(task);
    let top_position = getTopPosition(task, event);
    top_position = inRange(
        top_position,
        min_top_position,
        max_top_position
    );

    let bottom_position = top_position + task.offsetHeight;

    return [top_position, bottom_position];

}