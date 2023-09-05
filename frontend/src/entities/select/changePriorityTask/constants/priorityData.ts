// import =================================================== //
import type { Option } from "@shared/types/option";
import { Priority } from "@shared/types/tasks";

// main ===================================================== //
export const PRIORITY_DATA: Option<Priority>[] = [
    {
        value: 0,
        text: "нет приоритета",
    },
    {
        value: 1,
        text: "Приоритет 1",
    },
    {
        value: 2,
        text: "Приоритет 2",
    },
    {
        value: 3,
        text: "Приоритет 3",
    },
];