// main ===================================================== //
type Theme = "light" | "dark"
type ViewTasks = "tile" | "list"
type isAutoDeleteAfterComplete = boolean
interface User {
    theme?: Theme,
    view_tasks?: ViewTasks,
    isAutoDeleteAfterComplete?: isAutoDeleteAfterComplete
}

// export =================================================== //
export type {
    User,
    Theme,
    ViewTasks,
    isAutoDeleteAfterComplete,
};