import InputTaskType from "./types";
import React, { useState } from "react";
import { editTaskRequest } from "./api/editTask";
import { set as setTask } from "@app/redux/reducer/tasksReducer";
import { useAppDispatch } from "@shared/hooks/useAppDispatch";

const InputTask: InputTaskType = ({ taskId, value }) => {

  let dispatch = useAppDispatch();

  let [currentValue, setCurrentValue] = useState(value);

  // function handleBlur() {
  //   let new_value = text.replace(/ +/g, " ");
  //   setText(new_value);
  //   if (previous_text !== new_value) {
  //     previous_text = text;
  //     handleEdit(new_value);
  //   }
  // }

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setCurrentValue(event.target.value);
  }
  function handleBlur(event: React.ChangeEvent<HTMLInputElement>) {
    let new_value = event.target.value.replace(/ +/g, " ");
    if (new_value !== currentValue) {
      setCurrentValue(new_value);
      editTaskRequest({ id: taskId, name: new_value });
      dispatch(setTask({ id: taskId, value: { name: new_value } }));
    }
  }

  return (
    <input
      className='task_text'
      value={currentValue}
      onChange={handleChange}
      onBlur={handleBlur}
    />
  );

};

export default InputTask;