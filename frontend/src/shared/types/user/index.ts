// main ===================================================== //
type Theme = "light" | "dark"
type ViewTasks = "tile" | "list"
type isAutoDeleteTaskAfterComplete = boolean
interface User {
    theme?: Theme,
    view_tasks?: ViewTasks,
    isAutoDeleteTaskAfterComplete?: isAutoDeleteTaskAfterComplete
}

// export =================================================== //
export type {
    User,
    Theme,
    ViewTasks,
    isAutoDeleteTaskAfterComplete,
};