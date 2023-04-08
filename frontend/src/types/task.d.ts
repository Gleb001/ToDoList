export type TaskType = {
    id: number,
    text: string,
    status: statusType
}
export type statusType = "active" | "no_active"