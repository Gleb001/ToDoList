// requires ============================================ //
// framework Express ----------------------------------- //
const express = require("express");
// cors ------------------------------------------------ //
const cors = require("cors");
// utils ----------------------------------------------- //
const { updateJSONFile, getJSON } = require("./utils/work_with_json");

// constants
const APP = express();
const PORT = process.env.PORT || 5000;
const DATA_PATH = __dirname + "/data";

// main ================================================ //

// listen ---------------------------------------------- //
APP.listen(PORT, () => console.log(`Server starting on ${PORT}!`));

// link middleware ------------------------------------- //
APP.use(cors());

// routing --------------------------------------------- //

// "/tasks"
const PATH_TO_TASKS = DATA_PATH + "/tasks.json";
APP.get("/tasks", (req, res) => {
    res.json(getJSON(PATH_TO_TASKS));
});
APP.post("/tasks", express.json(), (req, res) => {
    let task = req.body;

    let new_tasks = updateJSONFile(
        PATH_TO_TASKS,
        data => {
            data.push(task);
            return data;
        }
    );

    res.json(new_tasks);
});
APP.delete("/tasks", express.json(), (req, res) => {
    let taskId = req.body.id;

    let new_tasks = updateJSONFile(
        PATH_TO_TASKS,
        tasks => tasks.filter(task => task.id !== taskId)
    );

    res.json(new_tasks);
});
APP.patch("/tasks", express.json(), (req, res) => {
    let new_data_task = req.body;
    let new_tasks = updateJSONFile(
        PATH_TO_TASKS,
        tasks => {
            tasks.forEach((task, index, tasks) => {
                if (task.id === new_data_task.id) {
                    tasks[index] ={
                        ...task,
                        ...new_data_task
                    };
                    // console.log(tasks[index]);
                }
            });
            return tasks;
        }
    );
    res.json(new_tasks);
});
// "/task"
APP.post("/task", express.text(), (req, res) => {
    let { current_task, current_position } = JSON.parse(req.body);
    updateJSONFile(data_path, data => {
        let tasks = data.tasks;
        let previous_position;
        for (let index = 0; index < tasks.length; index++) {
            let check_task = tasks[index];
            if (check_task.id === current_task.id) {
                previous_position = index;
                break;
            }
        }
        if (previous_position != current_position) {
            tasks.splice(previous_position, 1);
            tasks.splice(current_position, 0, current_task);
        }
    });
});

// "/api/data"
APP.get("/api/data", (req, res) => res.json(getJSON(data_path)));