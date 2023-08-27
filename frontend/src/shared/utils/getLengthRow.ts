// types ==================================================== //
type getLengthRowType = (
    element: HTMLElement | undefined | null
) => number
type CSSStyleValueType = {
    value: number,
    unit: string
}

// main ===================================================== //
export const getLengthRow: getLengthRowType = (
    element
) => {
    if (!element) return 0;
    let fontSize = element.computedStyleMap().get("font-size") as CSSStyleValueType;
    let width_char = (fontSize.value / 2) + 1;
    return Math.trunc(element.clientWidth / width_char);
}