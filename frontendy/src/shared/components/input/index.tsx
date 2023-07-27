import React, { useState } from 'react';
import InputType from "./types";

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