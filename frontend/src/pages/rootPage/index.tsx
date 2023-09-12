// import =================================================== //
// react ---------------------------------------------------- //
import type { FC } from 'react';
import { Outlet } from 'react-router';
// internal ------------------------------------------------- //
import { useColorTheme } from '@shared/hooks/useColorTheme';

// main ===================================================== //
export const RootPage: FC = () => {
    useColorTheme();
    return (<Outlet />);
}