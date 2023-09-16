// import =================================================== //
import { setStyle } from "@shared/libs/setStyle";
import { getStyleBeforeMove } from "./get";

// main ===================================================== //
export const setStyleBeforeMove = (element: HTMLElement) => {
    setStyle(
        element,
        getStyleBeforeMove(element)
    );
    setStyle(
        element.parentElement!,
        { userSelect: "none" }
    );
}