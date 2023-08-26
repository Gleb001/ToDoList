// import =================================================== //
// react ---------------------------------------------------- //
import React, { useState, useRef, useEffect } from 'react';
// inherit -------------------------------------------------- //
import TextAreaType from "./types";
import { getRows } from './helpers';

// main ===================================================== //
export const TextArea: TextAreaType = ({
    initialValue, max_rows = 4, ...attributes
}) => {

    let [value, setValue] = useState(initialValue);
    useEffect(() => setValue(initialValue), [initialValue]);
    
    let textareaRef = useRef<HTMLTextAreaElement>(null);
    let [rows, setRows] = useState(getRowsValue());
    useEffect(() => setRows( getRowsValue() ), [value]);

    return (
        <textarea
            ref={textareaRef}
            {...attributes}
            value={value}
            rows={rows}
            onChange={(event) => setValue(event.target.value)}
        />
    );


    
    // insert functions ------------------------------------- //
    function getRowsValue() {
        return getRows(textareaRef.current, value.length);
    }

};