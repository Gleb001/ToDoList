// import ================================================= //
import { useState } from "react";
import "./task.css";
import { responseChangeTask } from "../../api/task";
import { TaskType } from "../../types/task"

// main =================================================== //
function Task(props: {
  task: TaskType,
  handleMoveTask: () => void,
  handleDelete: () => void
}) {

  let previous_text = props.task.text;
  let [text, setText] = useState(props.task.text);
  
  // let [status, setStatus] = useState(props.task.status);
  // function handleClick() {
  //   let new_status = status === "active" ? "no_active" : "active";
  //   responseChangeTask(props.task.id, "text", new_status)
  //     .then(task => setStatus(task.status));
  // }
  function handleBlur() {
    let new_value = text.replace(/ +/g, " ");
    setText(new_value);
    if (previous_text !== new_value) {
      responseChangeTask(props.task.id, "text", new_value);
    }
  }

  return (
    <div className="task" key={props.task.id}>
      {/* <button
        className='task_button_state'
        onClick={() => handleClick()}
      ></button> */}
      <input
        className='task_text'
        value={text}
        onChange={(event) => setText(event.target.value)}
        onBlur={() => handleBlur()}
      />
      <button
        className='task_button_delete'
        onClick={() => props.handleDelete()}
      ></button>
    </div>
  );

};

// export ================================================== //
export default Task;