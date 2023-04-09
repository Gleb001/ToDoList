// import ================================================= //
import "./index.css";
import React from "react"

// main =================================================== //
function ButtonAddTask(props: { handleClick: () => void }) {

    return (
        <button className="button_add_task" onClick={() => props.handleClick()}>
            Add task
        </button>
    );

}

// export ================================================== //
export default ButtonAddTask;

