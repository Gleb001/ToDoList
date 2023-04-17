// import ================================================= //
import "./index.css";
import { useRef } from "react";
import { useState } from "react";
import { editTask, updatePositionTask } from "./api";
import {
  FunctionTextTaskType, FunctionTaskType,
  HandleMouseEventsType, DropZoneParametersType
} from "./types"

// main =================================================== //
const Task: FunctionTaskType = ({ data_task, handleDelete }) => {

  let task_ref = useRef<HTMLDivElement>(null);

  let drop_zone_parameters: DropZoneParametersType = {
    html: null,
    _isMoreTask(value, task) {
      let center_task_coordintate_y = task.offsetTop + (task.offsetHeight / 2);
      return (value > center_task_coordintate_y);
    },
    get task_environment() {

      let low_task = this.html!.previousElementSibling as HTMLElement | null;

      let high_task = this.html!.nextElementSibling as HTMLElement | null;
      if (high_task?.classList.contains("moving_task")) {
        high_task = high_task!.nextElementSibling as HTMLElement | null;
      }

      return { low_task, high_task };

    },
    checkPosition(current_y_position) {

      let { low_task, high_task } = this.task_environment;

      let isMoveDown = low_task && !this._isMoreTask(
        current_y_position,
        low_task
      );
      if (isMoveDown) {
        this.html!.remove();
        low_task!.before(this.html!);
        return;
      }

      let isMoveUp = high_task && this._isMoreTask(
        current_y_position + task_ref.current!.offsetHeight,
        high_task
      );
      if (isMoveUp) {
        this.html!.remove();
        high_task!.after(this.html!);
        return;
      }

    },
    create(height) {
      let result = document.createElement("div");
      result.classList.add("task_drop_zone");
      result.style.height = height + "px";
      return result;
    },
  };
  let handleMoveEvents = {
    preparationToMove() {

      task_ref.current!.querySelector("input")?.setAttribute("disabled", "true");

      let container = task_ref.current!.parentElement!;
      let scroll_top = container.scrollTop;

      // 1. first set fixed values
      task_ref.current!.style.width = task_ref.current!.offsetWidth + "px";
      task_ref.current!.style.top = task_ref.current!.offsetTop + "px";
      // 2. then add a class with position: absolute;
      task_ref.current!.classList.add("moving_task");

      let height_task = task_ref.current!.offsetHeight;
      drop_zone_parameters.html = drop_zone_parameters.create(height_task);
      task_ref.current!.before(drop_zone_parameters.html);

      container.scrollTo({ top: scroll_top, left: 0 });

    },
    moveStart() {

      // get DOM elements
      let html_task = task_ref.current!;
      let task_container = html_task.parentElement!;
      let last_task = task_container.lastElementChild! as HTMLElement;

      let style_task = window.getComputedStyle(html_task);
      let margin_top_task = parseInt(style_task.marginTop);
      let margin_bottom_task = parseInt(style_task.marginBottom);

      // get postitions variables
      let min_y = margin_top_task;
      let max_y = last_task.offsetTop - min_y;
      let center_task = (html_task.offsetHeight + margin_top_task + margin_bottom_task) / 2;

      return function (event: MouseEvent) {

        let current_scroll = task_container.scrollTop;
        let y_coordinate = event.clientY || 0;

        let new_value = (y_coordinate - center_task - task_container.offsetTop) + current_scroll;
        new_value = new_value <= min_y ? min_y :
          new_value >= max_y ? max_y :
            new_value;
        html_task.style.top = new_value + "px";

        drop_zone_parameters.checkPosition(new_value);

      }

    },
    moveEnd() {

      drop_zone_parameters.html!.before(task_ref.current!);

      // removing
      task_ref.current!.classList.remove("moving_task");
      drop_zone_parameters.html!.remove();
      task_ref.current!.querySelector("input")?.removeAttribute("disabled");

      // update
      let tasks = Array.from(task_ref.current!.parentElement!.children);
      let new_position = tasks.indexOf(task_ref.current!);
      updatePositionTask(data_task, new_position);

    },
  };

  let handleMouseEvents: HandleMouseEventsType = {

    motion_timeout: null,
    scroll_func() {
      let new_value = parseInt(window.getComputedStyle(task_ref.current!).top);
      drop_zone_parameters.checkPosition(new_value);
    },

    move: null,

    down() {
      this.motion_timeout = setTimeout(() => {
        handleMoveEvents.preparationToMove();
        this.move = handleMoveEvents.moveStart();
        task_ref.current!.addEventListener("mousemove", this.move);
        task_ref.current!.parentElement?.addEventListener("scroll", this.scroll_func);
      }, 300);
    },
    up(event) {
      if (event.target!.classList.contains("moving_task")) {
        handleMoveEvents.moveEnd();
        task_ref.current!.removeEventListener("mousemove", this.move!);
        task_ref.current!.parentElement?.removeEventListener("scroll", this.scroll_func);
      }
      if (this.motion_timeout) clearInterval(this.motion_timeout);
    },
    leave(event) {
      if (event.target!.classList.contains("moving_task")) this.up(event);
    },

  };

  return (
    <div
      ref={task_ref}
      className="task"
      onMouseDown={(event) => handleMouseEvents.down(event)}
      onMouseUp={(event) => handleMouseEvents.up(event)}
      onMouseLeave={(event) => handleMouseEvents.leave(event)}
    >
      {/* <button
        className='task_button_state'
        onClick={() => handleClick()}
      ></button> */}
      < TextTask
        text_task={data_task.text}
        handleEdit={(new_value: string) => editTask(data_task, "text", new_value)}
      />
      <button
        className='button_task_delete'
        onClick={() => handleDelete()}
      ></button>
    </div>
  );

};
const TextTask: FunctionTextTaskType = ({ text_task, handleEdit }) => {

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