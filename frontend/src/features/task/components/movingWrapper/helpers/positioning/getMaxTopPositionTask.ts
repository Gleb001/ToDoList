// main ===================================================== //
export function getMaxTopPositionTask(task: HTMLElement) {
    const lastTask = task.parentElement!.lastElementChild! as HTMLElement;
    return lastTask.offsetTop - 5;
}