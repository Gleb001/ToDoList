// types ==================================================== //
type getStyleType = (isThrough: boolean) => React.CSSProperties

// main ===================================================== //
export const getStyle: getStyleType = (isThrough) => ({
    textDecoration: isThrough ? "line-through" : ""
})