import tegContainerType from "./types";
import React from "react";
import "./ui/index.css";

// main
export const TegContainer: tegContainerType = ({
    isPriority
}) => {

    console.log(isPriority);

    return(
        <div id="teg_container">
            <span>Задача</span>
            {isPriority ? <span className="teg_priority">В приоритете</span> : ""}
        </div>
    );
}