// import =================================================== //
import type {
    getLengthRow as getLengthRowType,
    CSSStyleValue
} from "./types";

// main ===================================================== //
export const getLengthRow: getLengthRowType = (
    element
) => {
    if (!element) return 0;
    let fontSize = element.computedStyleMap().get("font-size") as CSSStyleValue;
    let width_char = (fontSize.value / 2) + 1;
    return Math.trunc(element.clientWidth / width_char);
}