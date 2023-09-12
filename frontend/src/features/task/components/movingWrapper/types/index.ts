// import =================================================== //
import type { FC, ReactElement } from 'react';
import type { Task } from '@shared/types/tasks';

// main ===================================================== //
type movingTaskWrapper = FC<{
    index: number,
    data: Task,
    children: ReactElement,
}>

// export =================================================== //
export type { movingTaskWrapper };