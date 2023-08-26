// import =================================================== //
// react ---------------------------------------------------- //
import React, { useState } from "react";
// component ------------------------------------------------ //
import { TextArea } from "@shared/components/textarea";
// internal ------------------------------------------------- //
import "./ui/index.css";
import TitleTaskType from "./types";

// main ===================================================== //
export const TitleTask: TitleTaskType = ({
  change, value
}) => {

  function handleBlur(event: React.FocusEvent<HTMLTextAreaElement>) {
    let new_value = event.target.value.replace(/ +/g, " ");
    if (new_value !== value) change(new_value);
  }

  return (
    <TextArea
      className='task_title'
      initialValue={value}
      onBlur={handleBlur}
      placeholder='Наименование задачи'
      max_rows={4}
    />
  );
  
};