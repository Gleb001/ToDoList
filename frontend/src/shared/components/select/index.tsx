// import =================================================== //
// react ---------------------------------------------------- //
import React from 'react';
// initial -------------------------------------------------- //
import "./ui/index.css";
import type { Select as SelectType } from './types';
import { getOptions } from './helpers/getOptions';

// main ===================================================== //
export const Select: SelectType = ({ data, ...attrs }) => {
    return (
        <select {...attrs}>{
            getOptions(data)
        }</select>
    );
}