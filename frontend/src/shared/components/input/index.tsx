// import =================================================== //
// react ---------------------------------------------------- //
import React, { useState } from 'react';
// inherit -------------------------------------------------- //
import InputType from "./types";

// main ===================================================== //
export const Input: InputType = ({
    initialValue, ...attributes
}) => {

    let [value, setValue] = useState(initialValue);

    return (
        <input
            {...attributes}
            value={value}
            onChange={(event) => setValue(event.target.value)}
        />
    );

};