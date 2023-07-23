import InputTaskType from "./types";
import React, { useState, useContext } from "react";
// import { editTaskRequest } from "./api/editTask";
// import { set as setTask } from "@app/redux/reducer/tasksReducer";
import { useAppDispatch } from "@shared/hooks/useAppDispatch";
import { patchTask } from "@app/redux/reducer/actionCreators";

const InputTask: InputTaskType = ({ taskId, value }) => {

  let dispatch = useAppDispatch();
  let [currentValue, setCurrentValue] = useState(value);

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setCurrentValue(event.target.value);
  }
  function handleBlur(event: React.ChangeEvent<HTMLInputElement>) {
    let new_value = event.target.value.replace(/ +/g, " ");
    if (new_value !== value) {
      setCurrentValue(new_value);
      dispatch(patchTask({ id: taskId, name: new_value  }));
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
}

export default InputTask;