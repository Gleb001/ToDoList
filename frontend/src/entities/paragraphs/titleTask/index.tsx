// import =================================================== //
// react ---------------------------------------------------- //
import React, { useEffect, useRef, useState } from 'react';
// helpers -------------------------------------------------- //
import { getTitle } from './helpers/getTitle';
import { getStyle } from './helpers/getStyle';
// internal ------------------------------------------------- //
import "./ui/index.css";
import type { TitleTask as TitleTaskType } from './types';


// main ===================================================== //
export const TitleTask: TitleTaskType = ({
    isThrough, text
}) => {

    let TitleTaskRef = useRef<HTMLParagraphElement | null>(null);
    let [title, setTitle] = useState(text);
    useEffect(() => {
        if (TitleTaskRef.current) {
            setTitle(
                getTitle(TitleTaskRef.current, title)
            )
        }
    }, []);
    
    return (
        <p
            ref={TitleTaskRef}
            style={getStyle(isThrough)}
            className='title-task'
        >{
            title || "Задача без наименования"
        }</p>
    );

};