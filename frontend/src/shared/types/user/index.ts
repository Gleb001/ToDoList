// main ===================================================== //
type Theme = "light" | "dark"
interface User {
    theme: Theme,
}

// export =================================================== //
export type { User, Theme };