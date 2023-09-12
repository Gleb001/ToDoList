// import =================================================== //
// react ---------------------------------------------------- //
import type { FC } from 'react';
import { NavLink } from 'react-router-dom';
// components ----------------------------------------------- //
import { ActionWindow } from '@shared/components/actionWindow';
import { Button } from '@shared/components/button';
import { Settings } from '@shared/components/settings';
import { SelectChangeTheme } from '@entities/select/changeTheme';
import { SelectAutoDeleteTaskAfterComplete } from '@entities/select/autoDeleteTaskAfterRemove';
// internal ------------------------------------------------- //
import './ui/index.css';

// main ===================================================== //
export const UserSettings: FC = () => (
    <ActionWindow.Wrapper>
        <ActionWindow.Header name="Настройки">
            <NavLink to="/tasks">
                <Button>←</Button>
            </NavLink>
        </ActionWindow.Header>
        <ActionWindow.Main>
            <Settings.Wrapper>
                <Settings.Field name="Цветовая тема">
                    <SelectChangeTheme />
                </Settings.Field>
                <Settings.Field name="Автоматически удалить задачу при её выполнении">
                    <SelectAutoDeleteTaskAfterComplete />
                </Settings.Field>
            </Settings.Wrapper>
        </ActionWindow.Main>
    </ActionWindow.Wrapper>
);