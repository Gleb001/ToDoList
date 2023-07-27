import TitleTaskType from "./types";
import React, { useState } from "react";
import "./ui/index.css";
import { TextArea } from "@shared/components/textarea";

const TitleTask: TitleTaskType = ({
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

export default TitleTask;