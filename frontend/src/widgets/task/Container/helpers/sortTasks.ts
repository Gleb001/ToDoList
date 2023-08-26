import { Task } from "@shared/types/tasks"

// types ==================================================== //
type SortTasksType = (data: Task[]) => Task[]

// main ===================================================== //
// сортировка пузырьком
export const SortTasks: SortTasksType = (data) => {
    if (data.length < 1) return [];

    let result = [...data];
    let length_subarray = result.length;
    while(length_subarray > 1) {

        for(let index = 1; index < length_subarray; index++) {

            let left = result[index - 1];
            let right = result[index];

            if (left.position > right.position) {
                let temp = left;
                result[index - 1] = right;
                result[index] = temp;
            }

        }
        length_subarray--;

    }
    return result;
}