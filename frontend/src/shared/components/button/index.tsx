// import =================================================== //
// react ---------------------------------------------------- //
import React from 'react';
// libs ----------------------------------------------------- //
import { concatObjects } from '@shared/libs/concatObects';
// internal ------------------------------------------------- //
import './ui/index.css';
import type { Button as ButtonType, ButtonAttributes } from './types';

// constants ================================================ //
const initialAttributes: ButtonAttributes = {
    className: "button"
};

// main ===================================================== //
export const Button: ButtonType = ({
    children, ...attr
}) => (
    <button {...concatObjects(attr, initialAttributes)} >{
        children
    }</button>
);