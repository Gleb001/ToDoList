// requires ================================================= //
// libs ----------------------------------------------------- //
const path = require("path");
// utils ---------------------------------------------------- //
const { updateJSONFile } = require("../../utils/updateJSONFile");

// constants ================================================ //
const PATH_TO_TASKS = path.resolve(
    __dirname,
    "../../data/tasks.json"
);

// main ===================================================== //
async function getTasks(req, res) {
    res.json(
        require(PATH_TO_TASKS)
    );
}
async function putTasks(req, res) {
    let { old_index, new_index } = req.body;
    let result = updateJSONFile(
        PATH_TO_TASKS,
        tasks => {
            let item = tasks.splice(old_index, 1)[0];
            if (tasks.length === new_index) {
                tasks.push(item);
            } else {
                tasks.splice(new_index, 0, item);
            }
        }
    );
    res.json(result);
}
async function patchTask(req, res) {
    let data = req.body;
    updateJSONFile(
        PATH_TO_TASKS,
        tasks => {
            tasks.forEach((task, index) => {
                if (task.id === data.id) {
                    tasks[index] = Object.assign(
                        tasks[index],
                        data
                    );
                }
            });
        }
    );
    res.json(data);
}
async function postTask(req, res) {
    updateJSONFile(
        PATH_TO_TASKS,
        tasks => tasks.push(req.body)
    );
    res.json(req.body);
}
async function deleteTask(req, res) {
    let delete_index = req.body.index;
    updateJSONFile(
        PATH_TO_TASKS,
        tasks => tasks.filter(
            (item, index) => index !== delete_index
        )
    );
    res.json(req.body);
}

// exports ================================================== //
module.exports = {
    getTasks,
    putTasks,
    patchTask,
    postTask,
    deleteTask,
};