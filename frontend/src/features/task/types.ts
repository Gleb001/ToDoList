// import =================================================== //
import type { FC } from 'react';
import type { Task } from '@shared/types/tasks';

// main ===================================================== //
type TaskFunctionComponent = FC<{
    index: number,
    data: Task,
}>

// export =================================================== //
export type { TaskFunctionComponent };