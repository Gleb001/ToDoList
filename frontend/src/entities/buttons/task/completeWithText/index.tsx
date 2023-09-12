// import =================================================== //
// react ---------------------------------------------------- //
import { useContext } from 'react';
// redux ---------------------------------------------------- //
import { useAppDispatch } from '@shared/hooks/useAppDispatch';
import { useAppSelector } from '@shared/hooks/useAppSelector';
import { deleteActiveTask, patchActiveTask } from '@app/redux/reducer/task';
import { userIsAutoDeleteAfterCompleteSelector } from '@app/redux/reducer/user/selectors';
// context -------------------------------------------------- //
import { ActiveTaskInEditorContext } from '@widgets/task/Editor/context/ActiveTaskInEditorContext';
// components ----------------------------------------------- //
import { Button } from '@shared/components/button';
// internal ------------------------------------------------- //
import type { ButtonCompleteTaskWithText as ButtonCompleteTaskWithTextType } from './types';

// main ===================================================== //
export const ButtonCompleteTaskWithText: ButtonCompleteTaskWithTextType = ({
    onClick
}) => {

    const dispatch = useAppDispatch();
    const { id, isComplete } = useContext(ActiveTaskInEditorContext);
    const isAutoDelete = useAppSelector(userIsAutoDeleteAfterCompleteSelector)

    function handleClick() {
        if (isAutoDelete) {
            dispatch(
                deleteActiveTask(id)
            );
            setTimeout(() => {
                if (onClick) onClick();
            }, 250);
        } else {
            dispatch(
                patchActiveTask({
                    id: id,
                    isComplete: !isComplete
                })
            );
        }
    }

    return (
        <Button onClick={handleClick} >{
            isComplete ?
                "Отменить выполнение" :
                "Выполнить"
        }</Button>
    );

}