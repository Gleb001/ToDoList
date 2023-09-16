// main ===================================================== //
export function getTopPosition(
    element: HTMLElement,
    mouseEvent: React.MouseEvent,
) {
    let top_position_cursor = mouseEvent.clientY - element.getBoundingClientRect().y;
    let changed = top_position_cursor - (element.offsetHeight / 2);
    let margins = 10;
    return (element.offsetTop + changed - margins);
};