import InputTaskType from "./types";
import React, { useState } from "react";
import { useAppDispatch } from "@shared/hooks/useAppDispatch";
import { patchTask } from "@app/redux/reducer/tasksReducer";

const InputTask: InputTaskType = ({
  taskId, value, disabled
}) => {

  let dispatch = useAppDispatch();
  let [currentValue, setCurrentValue] = useState(value);

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setCurrentValue(event.target.value);
  }
  function handleBlur(event: React.ChangeEvent<HTMLInputElement>) {
    let new_value = event.target.value.replace(/ +/g, " ");
    if (new_value !== value) {
      setCurrentValue(new_value);
      dispatch(patchTask({ id: taskId, name: new_value }));
    }
  }

  return (
    <input
      disabled={disabled}
      className='task_text'
      value={currentValue}
      onChange={handleChange}
      onBlur={handleBlur}
    />
  );
}

export default InputTask;