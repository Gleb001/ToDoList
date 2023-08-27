// import =================================================== //
// react ---------------------------------------------------- //
import React, { useState } from "react";
// component ------------------------------------------------ //
import { TextArea } from "@shared/components/textarea";
// redux --------------------------------------------------- //
import { useAppDispatch } from "@shared/hooks/useAppDispatch";
import { useAppSelector } from "@shared/hooks/useAppSelector";
import { patchTask } from "@app/redux/reducer/tasks";
import { activeTaskSelector } from "@app/redux/reducer/activeTask/selectors";
// internal ------------------------------------------------- //
import "./ui/index.css";
import type { TitleTask as TitleTaskType } from "./types";

// main ===================================================== //
export const TitleTask: TitleTaskType = ({ }) => {

  const dispatch = useAppDispatch();
  let task = useAppSelector(activeTaskSelector);

  function handleBlur(event: React.FocusEvent<HTMLTextAreaElement>) {
    let TextAreaRef = event.target;
    let new_title = TextAreaRef.value.replace(/ +/g, " ");
    dispatch(
      patchTask({
        id: task.id!,
        title: new_title
      })
    );
  }

  return (
    <TextArea
      className='task-title'
      placeholder='Наименование задачи'

      disabled={task.isComplete!}
      initialValue={task.title!}
      onBlur={handleBlur}
    />
  );

};