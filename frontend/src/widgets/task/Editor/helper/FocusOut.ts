// types ==================================================== //
type FocusOutType = (element: HTMLElement) => void

// main ===================================================== //
export const FocusOut: FocusOutType = (element) => {
    // @ts-ignore: has method blur
    if (element.onblur) element.onblur();
    for(let child of Array.from(element.children)) {
        FocusOut(child as HTMLElement);
    }
}