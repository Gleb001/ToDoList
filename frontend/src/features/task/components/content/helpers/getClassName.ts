// import =================================================== //
import { type Task } from "@shared/types/tasks";

// types ==================================================== //
type getClassName = (
    current_task: Task,
    active_task: Task["id"]
) => string

// constants ================================================ //
const classNames = {
    default:  " task-form ",
    moving:   " moving-task ",
    enabled:  " enabled-task ",
    disabled: " disabled-task ",
};

// main ===================================================== //
export const getClassName: getClassName = (
    current_task,
    id
) => {
    let className = classNames.default;
    if (id !== "") {

        if (id === current_task.id) {
            className += classNames.enabled + classNames.moving;
        } else {
            className += classNames.disabled;
        }

    } else {

        if (current_task.isComplete) {
            className += classNames.disabled;
        } else {
            className += classNames.enabled;
        }

    }
    return className;
};