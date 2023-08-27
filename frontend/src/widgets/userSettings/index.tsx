// import =================================================== //
// react ---------------------------------------------------- //
import React from 'react';
// components ----------------------------------------------- //
import { ActionWindow } from '@shared/components/actionWindow';
import { Button } from '@shared/components/button';
import { NavLink } from 'react-router-dom';
import { Settings } from '@shared/components/settings';
import { SelectChangeTheme } from '@entities/select/changeTheme';
// internal ------------------------------------------------- //
import './ui/index.css';
import type { UserSettings as UserSettingsType } from './types';
import { SelectViewTasks } from '@entities/select/ChangeViewTasks';

// main ===================================================== //
export const UserSettings: UserSettingsType = ({ }) => (
    <ActionWindow.Wrapper>
        <ActionWindow.Header name='Настройки'>
            <NavLink to="/tasks">
                <Button>←</Button>
            </NavLink>
        </ActionWindow.Header>
        <ActionWindow.Main>
            <Settings.Wrapper>
                <Settings.Field name={"Цветовая тема"}>
                    <SelectChangeTheme />
                </Settings.Field>
                <Settings.Field name={"Отображение задач"}>
                    <SelectViewTasks />
                </Settings.Field>
            </Settings.Wrapper>
        </ActionWindow.Main>
    </ActionWindow.Wrapper>
);