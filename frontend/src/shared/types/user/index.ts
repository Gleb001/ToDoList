// main ===================================================== //
type Theme = "light" | "dark"
type ViewTasks = "tile" | "list"
interface User {
    theme?: Theme,
    view_tasks?: ViewTasks,
}

// export =================================================== //
export type { User, Theme };