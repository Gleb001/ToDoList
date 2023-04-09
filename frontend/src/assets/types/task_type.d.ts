// import types =========================================== //
import uuid from "react-uuid";

export type DataTaskType = {
    id: ReturnType<typeof uuid>,
    text: string,
    status: StatusTaskType
}
type StatusTaskType = "active" | "no_active"