// import =================================================== //
import { getLengthRow } from "@shared/utils/getLengthRow";

// types ==================================================== //
type getTitleType = (taskRef: HTMLElement, text: string) => string

// main ===================================================== //
export const getTitle: getTitleType = (taskRef, text) => {
    let length_row = getLengthRow(taskRef);
    console.log(text);

    if (text.length > length_row) {
        let cropped_text = text.slice(0, length_row - 10);
        return cropped_text + "...";
    } else {
        return text;
    }
}