// types ==================================================== //
type setHeightForContentType = (element: HTMLElement) => void

// main ===================================================== //
export const setHeightForContent: setHeightForContentType = (element) => {
    element.style.height = "1px";
    element.style.height = (20 + element.scrollHeight) + "px";
}