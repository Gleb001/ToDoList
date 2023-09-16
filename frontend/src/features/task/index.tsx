// import =================================================== //
// components ----------------------------------------------- //
import { ContentTask } from './components/content';
import { MovingTaskWrapper } from './components/movingWrapper';
// internal ------------------------------------------------- //
import type { TaskFunctionComponent as TaskType } from './types';

// main ===================================================== //
export const Task: TaskType = ({ index, data }) => (
    <MovingTaskWrapper index={index} id={data.id} >
        <ContentTask data={data} />
    </MovingTaskWrapper>
);