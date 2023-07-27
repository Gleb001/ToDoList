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
APP.patch("/tasks", express.json(), ({ body }, res) => {
    let { old_index, new_index } = body;
    updateJSONFile(
        PATH_TO_TASKS,
        tasks => {
            let item = tasks.splice(old_index, 1)[0];
            if (tasks.length === new_index) {
                tasks.push(item);
            } else {
                tasks.splice(new_index, 0, item);
            }
            return tasks;
        }
    );
    res.json(body);
});

// "/task"
APP.patch("/task", express.json(), ({ body }, res) => {
    let { index, parameters } = body;
    console.log(parameters);
    updateJSONFile(
        PATH_TO_TASKS,
        tasks => {
            tasks[index] = Object.assign(
                tasks[index],
                parameters
            );
            return tasks;
        }
    );
    res.json(body);
});
APP.post("/task", express.json(), ({ body }, res) => {
    updateJSONFile(
        PATH_TO_TASKS,
        tasks => {
            tasks.push(body);
            return tasks;
        }
    );
    res.json(body);
});
APP.delete("/task", express.json(), ({ body }, res) => {
    let delete_index = body.index;
    updateJSONFile(
        PATH_TO_TASKS,
        tasks => tasks.filter(
            (_, index) => index !== delete_index
        )
    );
    res.json(body);
});