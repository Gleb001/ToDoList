// import =================================================== //
import { getLengthRow } from "@shared/utils/getLengthRow"

// types ==================================================== //
type getRowsType = (
    textareaRef: HTMLElement | null, 
    length_value: number
) => number

// main ===================================================== //
export let getRows: getRowsType = (
    textareaRef: HTMLElement | null,
    length_value: number
) => {
    let length_row = getLengthRow(textareaRef);
    return (
        length_row && length_value ?
            Math.ceil(length_value / length_row) :
            1
    );
}