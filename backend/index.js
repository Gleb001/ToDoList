// requires -------------------------------------------- //
const express = require("express");
const { updateJSONFile, getJSON } = require("./utils/work_with_json");

// main ------------------------------------------------ //
const app = express();
const PORT = process.env.PORT || 5000;
const data_path = __dirname + "/data/data.json";

// listen
app.listen(PORT, () => console.log(`Server starting on ${PORT}!`));

// use
app.use("/", function (req, res, next) {
    next();
})

// "/api/data/tasks"
app.get("/api/data/tasks", (req, res) => {
    res.json(getJSON(data_path).tasks);
});
app.post("/api/data/tasks", express.text(), (req, res) => {
    let task = JSON.parse(req.body);
    updateJSONFile(data_path, (data) => {
        let id_new_task = data.tasks.length + 1;
        data.tasks.push({ id: id_new_task, ...task });
    });
    res.json(getJSON(data_path).tasks);
});
app.post("/api/data/tasks/task", express.text(), (req, res) => {
    let new_task = JSON.parse(req.body);
    updateJSONFile(data_path, (data) => {
        for (let task of data.tasks) {
            if (task.id == new_task.id) {
                task.text = new_task.text;
            }
        }
    });
    res.json(getJSON(data_path).tasks);
});
app.delete("/api/data/tasks", express.text(), (req, res) => {
    let delete_task = JSON.parse(req.body);
    updateJSONFile(data_path, (data) => {
        data.tasks = data.tasks.filter(task => task.id != delete_task.id);
    });
    res.json(getJSON(data_path).tasks);
});
// "/api/data"
app.get("/api/data", (req, res) => {
    res.json(getJSON(data_path))
});