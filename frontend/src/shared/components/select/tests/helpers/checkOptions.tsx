// import =================================================== //
import { expect } from "@jest/globals";
import type { Option } from "@shared/types/option";

// types ==================================================== //
type checkOptions = (select: HTMLElement, data: Option[]) => void

// main ===================================================== //
export const checkOptions: checkOptions = (select, data) => {
    // @ts-ignore
    let options: HTMLOptionElement[] = select.children;
    for (let option of options) {
        let hasOption = false;
        for (let item of data) {
            if (option.value === String(item.value)) {
                expect(option.innerHTML).toBe(item.text);
                hasOption = true;
                break;
            }
        }
        if (!hasOption) {
            fail(`
                invalid options.
                data: ${option.value} -> ${option.innerHTML}
            `);
        }
    }
}