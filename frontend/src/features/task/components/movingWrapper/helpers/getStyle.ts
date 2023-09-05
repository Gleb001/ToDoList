// import =================================================== //
import { CSSProperties } from "react";

// types ==================================================== //
type getStyleType = (
    taskRef: HTMLElement | null,
    isMoving: boolean,
) => React.CSSProperties

// main ===================================================== //
export const getStyle: getStyleType = (taskRef, isMoving) => {
    if (!taskRef) return {};

    let style: CSSProperties = {};
    if (isMoving) {
        let padding_top = taskRef.computedStyleMap().get("margin-top") as { value: number };
        style = {
            position: "absolute",
            top: taskRef.offsetTop - padding_top.value + "px",
            width: taskRef.offsetWidth,
        }
    }

    return style;
}