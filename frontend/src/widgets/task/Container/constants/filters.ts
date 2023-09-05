// import =================================================== //
import type { Condition } from "@shared/libs/bubbleSortArray/types";
import type { Task } from "@shared/types/tasks";

// main ===================================================== //
export const lowerPriorityTask: Condition<Task> = (a, b) => (
    a.priority < b.priority
);
export const higherIsCompleteTask: Condition<Task> = (a, b) => (
    Number(a.isComplete) > Number(b.isComplete)
);