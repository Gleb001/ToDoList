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
async function patchActiveTask(req, res) {

    const data = req.body;
    const deletedTaskId = req.params.id;

    let result;

    updateJSONFile(
        PATH_TO_TASKS,
        tasks => {
            tasks.forEach((task, index) => {
                if (task.id === deletedTaskId) {
                    tasks[index] = Object.assign(
                        tasks[index],
                        data
                    );
                    result = {
                        index,
                        data: tasks[index]
                    };
                }
            });
        }
    );

    res.json(result);

}
async function deleteActiveTask(req, res) {
    let deletedTaskId = req.params.id;
    let indexDeletedTask;
    updateJSONFile(
        PATH_TO_TASKS,
        tasks => tasks.filter(
            (task, index) => {
                if (task.id !== deletedTaskId) {
                    return true;
                } else {
                    indexDeletedTask = index;
                    return false;
                }
            }
        )
    );
    res.json(indexDeletedTask);
}

// exports ================================================== //
module.exports = {
    patchActiveTask,
    deleteActiveTask,
};