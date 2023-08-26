// import =================================================== //
// react ---------------------------------------------------- //
import { Task } from '@shared/types/tasks';
import type { FC } from 'react';

// main ===================================================== //
type TitleTask = FC<{
    isThrough: Task["isComplete"],
    text: Task["title"]
}>

// export =================================================== //
export type { TitleTask };