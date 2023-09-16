// types ==================================================== //
type getStyleType = (
    taskRef: HTMLElement,
) => React.CSSProperties

// main ===================================================== //
export const getStyleBeforeMove: getStyleType = (taskRef) => {
    let padding_top = taskRef.computedStyleMap().get("margin-top") as { value: number };
    return {
        position: "absolute",
        top: taskRef.offsetTop - padding_top.value + "px",
        width: taskRef.offsetWidth + "px",
    };
}