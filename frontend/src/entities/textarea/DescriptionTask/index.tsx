// import =================================================== //
// react ---------------------------------------------------- //
import React from 'react';
// components ----------------------------------------------- //
import { TextArea } from '@shared/components/textarea';
// redux ---------------------------------------------------- //
import { useAppSelector } from '@shared/hooks/useAppSelector';
import { useAppDispatch } from '@shared/hooks/useAppDispatch';
import { patchTask } from '@app/redux/reducer/tasks';
import { activeTaskSelector } from '@app/redux/reducer/activeTask/selectors';
// internal ------------------------------------------------- //
import "./ui/index.css";
import DescriptionTaskType from "./types";

// main ==================================================== //
export const DescriptionTask: DescriptionTaskType = ({ }) => {

  const dispatch = useAppDispatch();
  let task = useAppSelector(activeTaskSelector);

  function handleBlur(event: React.FocusEvent<HTMLTextAreaElement>) {
    let TextAreaRef = event.target;
    let new_title = TextAreaRef.value.replace(/ +/g, " ");
    dispatch(
      patchTask({
        id: task.id!,
        description: new_title
      })
    );
  }

  return (
    <TextArea
      className="description-task"
      placeholder='Описание задачи'

      disabled={task.isComplete!}
      initialValue={task.description!}
      onBlur={handleBlur}
    />
  );

};