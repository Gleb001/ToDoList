import React, { useState, useRef, useEffect } from 'react';
import TextAreaType from "./types";
import { getRows } from './helpers';

export const TextArea: TextAreaType = ({
    initialValue, max_rows = 4, ...attributes
}) => {

    let [value, setValue] = useState(initialValue);
    useEffect(() => setValue(initialValue), [initialValue]);
    
    let textareaRef = useRef<HTMLTextAreaElement>(null);
    let [rows, setRows] = useState(getRowsValue());
    useEffect(() => setRows( getRowsValue() ), [value]);

    function getRowsValue() {
        return getRows(textareaRef.current, value.length);
    }
    console.log(rows);

    return (
        <textarea
            ref={textareaRef}
            {...attributes}
            value={value}
            rows={rows}
            onChange={(event) => setValue(event.target.value)}
        />
    );

};