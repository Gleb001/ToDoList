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
const PATH_TO_TASKS = DATA_PATH + "/tasks.json";

// main ================================================ //

// listen ---------------------------------------------- //
APP.listen(PORT, () => console.log(`Server starting on ${PORT}!`));

// link middleware ------------------------------------- //
APP.use(cors());

// routing --------------------------------------------- //

// "/tasks"
APP.get("/tasks", (req, res) => {
    res.json(getJSON(PATH_TO_TASKS));
});
APP.post("/tasks", express.json(), ({ body }, res) => {
    updateJSONFile(
        PATH_TO_TASKS,
        tasks => {
            tasks.push(body);
            return tasks;
        }
    );
    res.json(body);
});
APP.delete("/tasks", express.json(), ({ body }, res) => {
    updateJSONFile(
        PATH_TO_TASKS,
        tasks => {
            return tasks.filter(task => task.id !== body.id)
        }
    );
    res.json(body);
});
APP.patch("/tasks", express.json(), ({ body }, res) => {
    let {old_index, new_index} = body;
    updateJSONFile(
        PATH_TO_TASKS,
        tasks => {
            let item = tasks[old_index];
            tasks.splice(old_index, 1);
            tasks.splice(new_index, 0, item);
            return tasks;
        }
    );
    res.json(body);
});

// "/task"
APP.patch("/task", express.json(), ({ body }, res) => {
    updateJSONFile(
        PATH_TO_TASKS,
        tasks => {
            tasks.forEach((task, index, tasks) => {
                if (task.id === body.id) {
                    tasks[index] = Object.assign(task, body);
                }
            });
            return tasks;
        }
    );
    res.json(body);
});