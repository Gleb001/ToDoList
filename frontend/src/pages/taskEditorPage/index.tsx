// import =================================================== //
// react ---------------------------------------------------- //
import React from 'react';
// components ----------------------------------------------- //
import { TaskEditor } from '@widgets/task/Editor';
// inherit -------------------------------------------------- //
import type { TaskEditorPage as TaskEditorPageType } from './types';

// main ===================================================== //
export const TaskEditorPage: TaskEditorPageType = ({ }) => (
    <TaskEditor />
);