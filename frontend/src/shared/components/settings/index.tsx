// import =================================================== //
// react ---------------------------------------------------- //
import React, { Children } from 'react';
// initial -------------------------------------------------- //
import './ui/index.css';
import type { Setting } from './types';

// main ===================================================== //
export const Settings: Setting = {

    Field({ children, name, ...attrs  }) {
        return (
            <div {...attrs} className='setting'>
                <span className='setting-name'>{name}</span>
                {children}
            </div>
        )
    },

    Wrapper({ children, ...attrs  }) {
        return (
            <div {...attrs} id='settings-container'>{
                Children.map(children, child => child)
            }</div>
        )
    }

}