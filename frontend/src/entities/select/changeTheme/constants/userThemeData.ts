// import =================================================== //
import type { Option } from "@shared/types/option";
import { Theme } from "@shared/types/user";

// main ===================================================== //
export const USER_THEME_DATA: Option<Theme>[] = [
    {
        value: "light",
        text: "Светлая",
    },
    {
        value: "dark",
        text: "Темная",
    }
];
