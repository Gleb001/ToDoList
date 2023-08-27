// import =================================================== //
// react ---------------------------------------------------- //
import React, { Children } from 'react';
// inherit -------------------------------------------------- //
import './ui/index.css';
import type { ActionWindow as ActionWindowType } from './types';

// main ===================================================== //
export const ActionWindow: ActionWindowType = {

    Wrapper: ({ id = "", children }) => {

        return (
            <div id={id} className='action-window__wrapper'>
                {Children.map(children, child => child)}
            </div>
        );

    },
    Header: ({ name, children }) => (
        <div className='action-window__header'>
            <div className='buttons-container'>{
                Children.map(children, child => child)
            }</div>
            {
                name &&
                <span className='action-window-name'>{name}</span>
            }
        </div>
    ),
    Main: ({ children }) => (
        <div className='action-window__main'>
            {Children.map(children, child => child)}
        </div>
    ),

};