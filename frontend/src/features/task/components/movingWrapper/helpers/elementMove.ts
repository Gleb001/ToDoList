// import =================================================== //
import { setStyleAfterMove } from "./style/afterMove/set";
import { setStyleBeforeMove } from "./style/beforeMove/set";

// types ==================================================== //
type ElementMove = ReturnType<typeof getElementMove>;

// main ===================================================== //
export function getElementMove (
    taskElement: HTMLElement,
    shadowElement: HTMLElement,
) {
    const taskContainer = taskElement.parentElement!;
    const taskContent = taskElement.firstElementChild!;
    function elementMove(type: "on" | "off") {
        if (type === "on") {
            taskContainer.classList.remove("default");
            taskContainer.classList.add("changing");
            taskContent.classList.add("moving-task");

            setStyleBeforeMove(taskElement);
            taskElement.after(shadowElement);
            
            elementMove.is = true;
        } else {
            taskContainer.classList.add("default");
            taskContainer.classList.remove("changing");
            taskContent.classList.remove("moving-task");

            setStyleAfterMove(taskElement);
            shadowElement.remove();

            elementMove.is = false;
        }
    };
    elementMove.is = false;
    return elementMove;
};
export type { ElementMove };