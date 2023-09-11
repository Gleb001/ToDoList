// import =================================================== //
// react ---------------------------------------------------- //
import React, { Children } from 'react';
// internal ------------------------------------------------- //
import './ui/index.css';
import type { ActionWindow as ActionWindowType } from './types';
import { attrs } from '../textarea/tests/constants';

// main ===================================================== //
export const ActionWindow: ActionWindowType = {
    Wrapper: ({ children, ...attrs }) => (
        <div {...attrs} className='action-window__wrapper'>
            {Children.map(children, child => child)}
        </div>
    ),
    Header: ({ name, children, ...attrs }) => (
        <div {...attrs} className='action-window__header'>
            <div className='buttons-container'>{
                Children.map(children, child => child)
            }</div>
            {
                name &&
                <span className='action-window-name'>{name}</span>
            }
        </div>
    ),
    Main: ({ children, ...attrs }) => (
        <div {...attrs} className='action-window__main'>
            {Children.map(children, child => child)}
        </div>
    ),
};