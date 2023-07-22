// types ================================================== //
type getStyleType = (isActive: boolean) => React.CSSProperties

// main =================================================== //
const getStyle: getStyleType = (isActive) => ({
    backgroundColor: !isActive ? "grey" : "yellow",
    color: "black",
});

// export ================================================= //
export default getStyle;