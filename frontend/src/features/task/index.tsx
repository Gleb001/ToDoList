// import =================================================== //
// react ---------------------------------------------------- //
import React from 'react';
// components ----------------------------------------------- //
import { ContentTask } from './components/content';
import { MovingTaskWrapper } from './components/movingWrapper';
// inherit -------------------------------------------------- //
import type { TaskFunctionComponent as TaskType } from './types';

// main ===================================================== //
export const Task: TaskType = ({ index, data }) => (
    <MovingTaskWrapper index={index} data={data} >
        <ContentTask data={data} />
    </MovingTaskWrapper>
);