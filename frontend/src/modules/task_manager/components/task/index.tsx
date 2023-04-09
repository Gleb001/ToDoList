// import ================================================= //
import "./index.css";
import { useState } from "react";
import { editTask } from "./api";
import {
  FunctionTextTaskType,
  FunctionTaskType,
} from "./types"

// main =================================================== //
const Task: FunctionTaskType = ({ task, handleDelete }) => {

  // let draggable = false;
  // let interval: ReturnType<typeof setTimeout>;
  // const handleMouseEvents: HandleMouseEventsType = {
  //   move(event) {

  //     if (!draggable) return;

  //     let element = event.target as HTMLInputElement;
  //     let width_element = element.offsetWidth;
  //     console.log(width_element);
  //     let element_coordinates = element.getBoundingClientRect();
  //     element.style.position = "absolute";
  //     element.style.width = width_element + "px";
  //     element.style.zIndex = "5";

  //     let container_elements = element.parentElement as HTMLDivElement;
  //     let coordinates_conatiner = container_elements.getBoundingClientRect();

  //     let last_element = container_elements.lastChild as HTMLDivElement;
  //     let coordinates_last_element = last_element.getBoundingClientRect();

  //     let first_element = container_elements.firstChild as HTMLDivElement;
  //     let coordinates_first_element = first_element.getBoundingClientRect();

  //     let min_y = 0;
  //     let max_y = (coordinates_last_element.top + coordinates_last_element.height) -
  //       coordinates_first_element.top;

  //     let center_input = element_coordinates.height / 2;
  //     let top_input = element_coordinates.top;
  //     console.log("Move!");

  //     let new_coordinate_y = event.clientY - top_input + center_input;
  //     new_coordinate_y = new_coordinate_y < min_y ? min_y : new_coordinate_y > max_y ? max_y : new_coordinate_y;
  //     element.style.top = new_coordinate_y + "px";

  //   },
  //   down(event) {
  //     console.log("Down!");
  //     interval = setTimeout(() => {
  //       let input = event.target as HTMLInputElement;
  //       input.style.borderColor = "white";
  //       draggable = true;
  //     }, 1000);
  //   },
  //   up(event) {
  //     let input = event.target as HTMLInputElement;
  //     if (draggable) {
  //       input.style.borderColor = "black";
  //       console.log("STOP MOVE!");
  //     }
  //     clearInterval(interval);
  //     draggable = false;
  //     console.log("UP!");
  //   }
  // };

  return (
    <div
      className="task"
      // onMouseDown={(event) => handleMouseEvents.down(event)}
      // onMouseUp={(event) => handleMouseEvents.up(event)}
      // onMouseMove={(event) => handleMouseEvents.move(event)}
      // draggable={true}
    >
      {/* <button
        className='task_button_state'
        onClick={() => handleClick()}
      ></button> */}
      < TextTask
        text_task={task.text}
        handleEdit={(new_value: string) => editTask(task, "text", new_value)}
      />
      <button
        className='button_task_delete'
        onClick={() => handleDelete()}
      ></button>
    </div>
  );

};
const TextTask: FunctionTextTaskType = (
  { text_task, handleEdit }
) => {

  let previous_text = text_task;
  let [text, setText] = useState(text_task);

  function handleBlur() {
    let new_value = text.replace(/ +/g, " ");
    setText(new_value);
    if (previous_text !== new_value) {
      previous_text = text;
      handleEdit(new_value);
    }
  }

  return (
    <input
      className='task_text'
      value={text}
      onChange={(event) => setText(event.target.value)}
      onBlur={() => {
        handleBlur()
      }}
    />
  );

};

// export ================================================== //
export default Task;

  // let [status, setStatus] = useState(props.task.status);
  // function handleClick() {
  //   let new_status = status === "active" ? "no_active" : "active";
  //   responseChangeTask(props.task.id, "text", new_status)
  //     .then(task => setStatus(task.status));
  // }