// import =================================================== //
// react ---------------------------------------------------- //
import { Task } from '@shared/types/tasks';
import type { FC } from 'react';

// main ===================================================== //
type TitleTask = FC<{
    data: Task
}>

// export =================================================== //
export type { TitleTask };