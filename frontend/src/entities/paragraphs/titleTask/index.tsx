// import =================================================== //
// react ---------------------------------------------------- //
import { useEffect, useRef, useState } from 'react';
// internal ------------------------------------------------- //
import "./ui/index.css";
import { getTitle } from './helpers/getTitle';
import { getStyle } from './helpers/getStyle';
import type { TitleTask as TitleTaskType } from './types';

// main ===================================================== //
export const TitleTask: TitleTaskType = ({
    data
}) => {

    let TitleTaskRef = useRef<HTMLParagraphElement | null>(null);
    const [title, setTitle] = useState(data.title);
    
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
            style={getStyle(data.isComplete)}
            className='title-task'
        >{
            title || "Задача без наименования"
        }</p>
    );

};