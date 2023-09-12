// import =================================================== //
// redux ---------------------------------------------------- //
import { useAppDispatch } from '@shared/hooks/useAppDispatch';
import { deleteActiveTask, patchActiveTask } from '@app/redux/reducer/task';
import { useAppSelector } from '@shared/hooks/useAppSelector';
import { userIsAutoDeleteAfterCompleteSelector } from '@app/redux/reducer/user/selectors';
// internal ------------------------------------------------- //
import "./ui/index.css";
import { getClassName } from './helpers/getClassName';
import type { ButtonRemoveTask as ButtonCompleteTaskType } from "./types";

// main ===================================================== //
export const ButtonCompleteTask: ButtonCompleteTaskType = ({
    data
}) => {

    const dispatch = useAppDispatch();
    const { id, isComplete, priority } = data;
    const isAutoDelete = useAppSelector(userIsAutoDeleteAfterCompleteSelector);

    function handleClick() {
        if (isAutoDelete) {
            dispatch(
                deleteActiveTask(id)
            );
        } else {
            dispatch(
                patchActiveTask({
                    id: data.id,
                    isComplete: !isComplete
                })
            );
        }
    }

    return (
        <button
            className={getClassName(priority, isComplete)}
            onClick={handleClick}
        />
    );

};