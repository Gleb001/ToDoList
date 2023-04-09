// import ================================================= //
import {DataTaskType} from "../components/task/types/index"

// export ================================================= //
export default function getTasks(): Promise<DataTaskType[]> {
    return fetch("/api/data/list_tasks")
        .then(response => response.json());
}