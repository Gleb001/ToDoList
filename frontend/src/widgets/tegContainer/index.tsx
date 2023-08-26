// import =================================================== //
// react ---------------------------------------------------- //
import React from "react";
// types ---------------------------------------------------- //
import type { TagContainer as TagContainerType } from "./types";
// styles --------------------------------------------------- //
import "./ui/index.css";

// main ===================================================== //
export const TagContainer: TagContainerType = ({
    isPriority
}) => (
    <div id="tag-container">
        <span>Задача</span>
        {
            isPriority &&
            <span className="tag-priority">В приоритете</span>
        }
    </div>
);