// requires ================================================= //
// libs ----------------------------------------------------- //
const express = require("express");
const {
    patchActiveTask,
    deleteActiveTask,
} = require("./methods");

// constants ================================================ //
const ROUTER = express.Router();

// main ===================================================== //
ROUTER.route("/:id")
    .patch(patchActiveTask)
    .delete(deleteActiveTask);

// export =================================================== //
module.exports = ROUTER;