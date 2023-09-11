// import =================================================== //
// react ---------------------------------------------------- //
import React, { useState, ChangeEvent, useEffect, useRef } from 'react';
// internal ------------------------------------------------- //
import "./ui/index.css";
import type { TextAreaType } from "./types";
import { setHeightForContent } from './helpers/setHeightForContent';

// main ===================================================== //
export const TextArea: TextAreaType = ({
    initialValue = "", ...attrs
}) => {

    let TextAreaRef = useRef<HTMLTextAreaElement | null>(null);
    let [value, setValue] = useState(initialValue);
    useEffect(() => {
        if (TextAreaRef.current) {
            setHeightForContent(TextAreaRef.current!);
        }
    }, []);

    function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
        let element = event.target;
        setValue(element.value);
        setHeightForContent(element);
    }

    return (
        <textarea
            ref={TextAreaRef}
            value={value}
            onChange={handleChange}
            {...attrs}
        />
    );

};