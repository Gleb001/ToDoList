// import =================================================== //
// react ---------------------------------------------------- //
import React, { useContext } from 'react';
// components ----------------------------------------------- //
import { TextArea } from '@shared/components/textarea';
// redux ---------------------------------------------------- //
import { useAppDispatch } from '@shared/hooks/useAppDispatch';
import { patchActiveTask } from '@app/redux/reducer/task';
// internal ------------------------------------------------- //
import "./ui/index.css";
import DescriptionTaskType from "./types";
import { ActiveTaskInEditorContext } from '@widgets/task/Editor/context/ActiveTaskInEditorContext';

// main ==================================================== //
export const DescriptionTask: DescriptionTaskType = ({ }) => {

  const dispatch = useAppDispatch();
  const { id, description, isComplete } = useContext(ActiveTaskInEditorContext);

  function handleBlur(event: React.FocusEvent<HTMLTextAreaElement>) {
    let TextAreaRef = event.target;
    // PS: remove extra spaces in the string
    let new_title = TextAreaRef.value.replace(/ +/g, " ");
    dispatch(
      patchActiveTask({
        id: id,
        description: new_title
      })
    );
  }

  return (
    <TextArea
      className="description-task"
      placeholder='Описание задачи'

      disabled={isComplete}
      initialValue={description}
      onBlur={handleBlur}
    />
  );

};