// main ===================================================== //
import type { User } from "@shared/types/user"

// types ==================================================== //
type getClassNameType = (view_tasks: User["view_tasks"]) => string

// main ===================================================== //
export const getClassName: getClassNameType = (view_tasks) => (
    view_tasks === "list" ? "task-list" : "task-tile"
)