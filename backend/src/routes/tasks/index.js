// requires ================================================= //
// libs ----------------------------------------------------- //
const express = require("express");
const {
    getTasks,
    putTasks,
    postTask,
    deleteTask,
    patchTask,
} = require("./methods");

// constants ================================================ //
const ROUTER = express.Router();

// main ===================================================== //
ROUTER.route("/")
    .get(getTasks)       // получить список задач
    .put(putTasks)       // изменить данные задачи (по полям)
    .patch(patchTask)    // изменить положение задач (по индексу)
    .post(postTask)      // добавить задачу
    .delete(deleteTask); // удалить задачу

// export =================================================== //
module.exports = ROUTER;