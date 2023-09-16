// main ===================================================== //
export function changePositionTask(
    shadowTask: HTMLElement,
    top: number,
    bottom: number
) {

    const task = shadowTask.previousElementSibling as HTMLElement;
    const previousTask = shadowTask.previousElementSibling!.previousElementSibling as HTMLElement;
    const nextTask = shadowTask.nextElementSibling as HTMLElement;

    task.style.top = top + "px";

    const half_task = shadowTask.offsetHeight / 2;

    let topPositionPrevTask = previousTask ?
        previousTask.offsetTop + half_task :
        0;
    if (topPositionPrevTask !== 0 && top < topPositionPrevTask) {
        task.remove();
        previousTask!.before(
            task,
            shadowTask
        );
        return -1;
    }

    let topPositionNextTask = nextTask ?
        nextTask.offsetTop + half_task :
        0;
    if (topPositionNextTask !== 0 && bottom > topPositionNextTask) {
        task.remove();
        nextTask.after(
            task,
            shadowTask
        );
        return 1;
    }

    return 0;

}