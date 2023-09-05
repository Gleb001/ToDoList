// import =================================================== //
import { Task } from "@shared/types/tasks"

// types ==================================================== //
type getClassName = (
    priority: Task["priority"],
    isComplete: Task["isComplete"]
) => string

// main ===================================================== //
export const getClassName: getClassName = (
    priority, isComplete
) => (
    "button-complete-task " +
    (priority ? "button-priority " : " ") +
    (isComplete ? "button-complete " : " ")
)