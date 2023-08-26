// import =================================================== //
// react ---------------------------------------------------- //
import React from 'react';
// components ----------------------------------------------- //
import { Button } from '@shared/components/button';
// internal ------------------------------------------------- //
import "./ui/index.css";
import type { ButtonExit as ButtonExitType } from "./types";

// main ===================================================== //
export const ButtonExit: ButtonExitType = ({
    onClick
}) => (
    <Button
        className='button-exit'
        onClick={onClick}
    >
        ←
    </Button>
);
