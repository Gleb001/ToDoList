// import =================================================== //
import { CSSProperties } from "react";

// types ==================================================== //
type hasStyle = (
    element: HTMLElement,
    style: CSSProperties
) => boolean

// helpers ================================================== //
const getValidStyleName = (style_name) => (
    style_name.replace(
        /[A-Z]/g,
        ($0: string) => "-" + $0.toLowerCase()
    )
);

// main ===================================================== //
export const hasStyle: hasStyle= (element, style) => {
    for (const style_name in style) {
        const valid_style_name = getValidStyleName(style_name);
        const hasProperty = element.style.getPropertyValue(valid_style_name);
        if (!hasProperty) return false;
    }
    return true;
}