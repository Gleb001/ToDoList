// import =================================================== //
// libs ----------------------------------------------------- //
import { render } from "@testing-library/react";
import { HTMLAttributes } from "react";
// component ------------------------------------------------ //
import { TextArea } from "../..";

// types ==================================================== //
type AttrsTextArea = HTMLAttributes<HTMLTextAreaElement>

// main ===================================================== //
export const setup = (
    initialValue?: string,
    attrs?: AttrsTextArea
) => {
    const data = { initialValue, ...attrs }
    const dom = render(<TextArea data-testid="textarea" {...data} />);
    const textarea = dom.getByTestId("textarea") as HTMLTextAreaElement;
    return {
        textarea,
        dom,
    };
}