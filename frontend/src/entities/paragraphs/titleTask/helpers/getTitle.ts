// import =================================================== //
import { getLengthRow } from "@shared/libs/getLengthRow";

// types ==================================================== //
type getTitleType = (taskRef: HTMLElement, text: string) => string

// main ===================================================== //
export const getTitle: getTitleType = (taskRef, text) => {
    let length_row = getLengthRow(taskRef);

    if (text.length > length_row) {
        let cropped_text = text.slice(0, length_row - 3);
        return cropped_text + "...";
    } else {
        return text;
    }
}