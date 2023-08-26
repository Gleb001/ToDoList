// import =================================================== //
// react ---------------------------------------------------- //
import React, { Children } from 'react';
// inherit -------------------------------------------------- //
import './ui/index.css';
import type { ActionWindow as ActionWindowType } from './types';

// main ===================================================== //
export const ActionWindow: ActionWindowType = {

    Wrapper: ({ children }) => {

        console.log(children);

        return (
            <div className='action-window__wrapper'>
                {Children.map(children, child => child)}
            </div>
        );

    },
    Header: ({ children }) => (
        <div className='active-window__header'>
            {Children.map(children, child => child)}
        </div>
    ),
    Main: ({ children }) => (
        <div className='active-window__main'>
            {Children.map(children, child => child)}
        </div>
    ),

};