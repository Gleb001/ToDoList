// import =================================================== //
// react ---------------------------------------------------- //
import React from 'react';
// inherit -------------------------------------------------- //
import './ui/index.css';
import type { Button as ButtonType, ButtonAttributes } from './types';
import { combineValues } from '../../libs/combineValues';

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