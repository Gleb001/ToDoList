// main ===================================================== //
interface Task {
    id: string,
    title: string,
    description: string,
    isPriority: boolean,
    isComplete: boolean,
}
type DataTask = (
    { id: Task["id"] } &
    { [key in keyof Task]?: Task[key] }
)

// export =================================================== //
export type { Task, DataTask };