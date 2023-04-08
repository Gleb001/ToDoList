// import ================================================= //
import "./button_add_task.css";
import React from "react"

// main =================================================== //
function ButtonAddTask(props: { handleClick: () => void }) {

    return (
        <button
            id='button_add_task'
            onClick={() => props.handleClick()}
        >Add task</button>
    );

}

// export ================================================== //
export default ButtonAddTask;