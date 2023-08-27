// import =================================================== //
// react ---------------------------------------------------- //
import React from 'react';
import { Outlet } from 'react-router';
// internal ------------------------------------------------- //
import type { RootPage as RootPageType } from './types';
import { useColorTheme } from '@entities/hooks/useColorTheme';

// main ===================================================== //
export const RootPage: RootPageType = ({ }) => {
    useColorTheme();
    return (<Outlet />);
}