// import =================================================== //
import type { FC, ReactElement } from 'react';
import type { Task } from '@shared/types/tasks';

// main ===================================================== //
type movingTaskWrapper = FC<{
    initial_index: number,
    id: Task["id"],
    children: ReactElement,
}>

// export =================================================== //
export type { movingTaskWrapper };