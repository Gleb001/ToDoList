// import =================================================== //
// react ---------------------------------------------------- //
import React from 'react';
// components ----------------------------------------------- //
import { ActionWindow } from '@shared/components/actionWindow';
import { UserSettings } from '@widgets/userSettings';
// inherit -------------------------------------------------- //
import type { SettingsPage as SettingsPageType } from './types';

// main ===================================================== //
export const SettingsPage: SettingsPageType = ({ }) => (
    <ActionWindow>
        <UserSettings />
    </ActionWindow>
);