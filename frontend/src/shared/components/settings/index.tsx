// import =================================================== //
// react ---------------------------------------------------- //
import React, { Children } from 'react';
// initial -------------------------------------------------- //
import './ui/index.css';
import type { Setting } from './types';

// main ===================================================== //
export const Settings: Setting = {

    Field({ name, children }) {
        return (
            <div className='setting'>
                <span className='setting-name'>{name}</span>
                {children}
            </div>
        )
    },

    Wrapper({ children }) {
        return (
            <div id='settings-container'>{
                Children.map(
                    children,
                    child => child
                )
            }</div>
        )
    }

}