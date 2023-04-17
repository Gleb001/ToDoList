// import ================================================= //
import {DataTaskType} from "../../../assets/types/task_type";
import uuid from "react-uuid";

// export ================================================= //
export default function addTask(): Promise<DataTaskType[]> {
    return fetch("/api/data/list_tasks", {
        method: "POST",
        headers: { 'Access-Control-Allow-Headers': '*' },
        body: JSON.stringify({
            id: uuid(),
            text: "New TaskType!",
            status: "no_active"
        })
    }).then(response => response.json());
}