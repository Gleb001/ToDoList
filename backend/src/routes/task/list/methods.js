// requires ================================================= //
// libs ----------------------------------------------------- //
const path = require("path");
// utils ---------------------------------------------------- //
const { updateJSONFile } = require("../../../utils/updateJSONFile");

// constants ================================================ //
const PATH_TO_TASKS = path.resolve(
    __dirname,
    "../../../data/tasks.json"
);

// main ===================================================== //
async function getListTasks(req, res) {
    res.json(
        require(PATH_TO_TASKS)
    );
}
async function postListTasks(req, res) {
    let addedTask = req.body;
    updateJSONFile(
        PATH_TO_TASKS,
        tasks => {
            tasks.push(addedTask);
        }
    );
    res.json(addedTask);
}
async function putListTasks(req, res) {
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

// exports ================================================== //
module.exports = {
    getListTasks,
    postListTasks,
    putListTasks,
};