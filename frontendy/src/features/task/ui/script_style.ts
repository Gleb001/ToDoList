export function getStyleTask (
    taskRef: HTMLElement | null,
    isMoving: boolean,
): React.CSSProperties {
    if (isMoving && taskRef) {
        let padding_top = taskRef.computedStyleMap().get("margin-top") as { value: number };

        return {
            position: "absolute",
            top: taskRef.offsetTop - padding_top.value + "px",
            zIndex: 10,
            boxShadow: "0 0 5px .5px",

            width: taskRef.offsetWidth,
            cursor: "pointer",
        }
    } else {
        return {
            top: "0px",
            zIndex: 1,

            width: "100%",
        }
    }
};