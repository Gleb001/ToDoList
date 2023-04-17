// requires -------------------------------------------- //
const express = require("express");
const { updateJSONFile, getJSON } = require("./utils/work_with_json");

// main ------------------------------------------------ //
const app = express();
const PORT = process.env.PORT || 5000;
const data_path = __dirname + "/data/data.json";

// listen
app.listen(PORT, () => console.log(`Server starting on ${PORT}!`));

// "/api/data/list_tasks"
app.get("/api/data/list_tasks", (req, res) => {
    res.json(getJSON(data_path).tasks);
});
app.post("/api/data/list_tasks", express.text(), (req, res) => {
    let task = JSON.parse(req.body);
    updateJSONFile(data_path, data => data.tasks.push({ ...task }));
    res.json(getJSON(data_path).tasks);
});
app.delete("/api/data/list_tasks", express.text(), (req, res) => {
    let delete_task = JSON.parse(req.body);
    updateJSONFile(data_path, data => {
        let index_delete_task = 0;
        let tasks = data.tasks;
        for (let index = 0; index < tasks.length; index++) {
            let check_task = tasks[index];
            if (check_task.id === delete_task.id) {
                index_delete_task = index;
                break;
            }
        }
        data.tasks.splice(index_delete_task, 1);
    });
    res.json(getJSON(data_path).tasks);
});
// "/api/data/task"
app.patch("/api/data/task", express.text(), (req, res) => {
    let data_task = JSON.parse(req.body);
    updateJSONFile(data_path, (data) => {
        let tasks = data.tasks;
        for (let index = 0; index < tasks.length; index++) {
            let task = tasks[index];
            if (task.id === data_task.id) {
                task[data_task.key] = data_task.new_value;
            }
        }
    });
    res.json(getJSON(data_path).tasks);
});
app.post("/api/data/task", express.text(), (req, res) => {
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
        if (previous_position != current_position)  {
            tasks.splice(previous_position, 1);
            tasks.splice(current_position, 0, current_task);
        }
    });
});

// "/api/data"
app.get("/api/data", (req, res) => res.json(getJSON(data_path)));