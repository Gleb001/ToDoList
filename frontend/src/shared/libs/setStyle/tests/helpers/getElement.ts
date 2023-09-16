export const getElement = () => {
    document.body.innerHTML = `
        <div id="element">
            Hello world
        </div>
    `;
    return document.getElementById("element")!;
};