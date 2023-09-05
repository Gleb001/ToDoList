// import =================================================== //
// react ---------------------------------------------------- //
import React from 'react';
// libs ----------------------------------------------------- //
import { combineValues } from '@shared/libs/combineValues';
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
    <button {...combineValues(attr, initialAttributes)} >{
        children
    }</button>
);