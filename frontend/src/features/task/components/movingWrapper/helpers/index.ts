// imports
import { MouseEvent } from "react";
import { inRange } from "@shared/utils/inRange";

// main
export function getContainerTaskRef(taskRef: HTMLElement) {
    return taskRef.parentElement;
}
export function getTop(
    mouseEvent: React.MouseEvent,
    taskRef: HTMLElement
) {
    let top_position_cursor = mouseEvent.clientY - taskRef.getBoundingClientRect().y;
    let changed = top_position_cursor - (taskRef.offsetHeight / 2);
    let margins = 10;

    return taskRef.offsetTop + changed - margins;
};
export function createShadowTask() {
    let shadowTaskRef = document.createElement("div");
    shadowTaskRef.className = "task-form shadow-task";
    return shadowTaskRef;
}
export function getTopPositionTask(
    event: MouseEvent<HTMLDivElement>,
    taskRef: HTMLElement
) {

    let taskContainerRef = taskRef.parentElement!;
    let lastTaskRef = Array.from(taskContainerRef.children).at(-1) as HTMLElement;

    let min = 0;
    let max = lastTaskRef.offsetTop - 5;

    let top_position = getTop(event, taskRef);
    return inRange(top_position, min, max);

}
export function changePositionTask(
    shadowTaskRef: HTMLElement,
    top: number,
    bottom: number
) {

    let taskRef = shadowTaskRef.previousElementSibling as HTMLElement;
    let previousTaskRef = shadowTaskRef.previousElementSibling?.previousElementSibling as HTMLElement;
    let nextTaskRef = shadowTaskRef.nextElementSibling as HTMLElement;

    let half_task = shadowTaskRef.offsetHeight / 2;
    let topPositionPrevTask = previousTaskRef ?
        previousTaskRef.offsetTop + half_task :
        null;
    let topPositionNextTask = nextTaskRef ?
        nextTaskRef.offsetTop + half_task :
        null;

    let add_index = 0;
    if (topPositionPrevTask && top < topPositionPrevTask) {
        taskRef.remove();
        previousTaskRef.before(
            taskRef,
            shadowTaskRef
        );
        add_index = -1;
    }
    else if (topPositionNextTask && bottom > topPositionNextTask) {
        taskRef.remove();
        nextTaskRef.after(
            taskRef,
            shadowTaskRef
        );
        add_index = 1;
    }

    taskRef.style.top = top + "px";
    return add_index;

}