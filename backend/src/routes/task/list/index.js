// requires ================================================= //
// libs ----------------------------------------------------- //
const express = require("express");
const {
    getListTasks,
    putListTasks,
    postListTasks,
} = require("./methods");

// constants ================================================ //
const ROUTER = express.Router();

// main ===================================================== //
ROUTER.route("/")
    .get(getListTasks) 
    .put(putListTasks)
    .post(postListTasks);      

// export =================================================== //
module.exports = ROUTER;