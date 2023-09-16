// import =================================================== //
import { setStyle } from "@shared/libs/setStyle";

// main ===================================================== //
export const setStyleAfterMove = (element: HTMLElement) => {
    element.removeAttribute("style");
    setStyle(
        element.parentElement!,
        { userSelect: "text" }
    );
}