// import =================================================== //
import type { setStyle as setStyleType } from "./types";

// main ===================================================== //
export const setStyle: setStyleType = (element, style) => {
    for (let style_name in style) {
        element.style[style_name] = style[style_name];
    }
}