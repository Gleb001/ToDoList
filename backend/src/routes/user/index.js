// requires ================================================= //
// framework Express ---------------------------------------- //
const express = require("express");
// utils ---------------------------------------------------- //
const { getUser, patchUser } = require("./methods");

// constants ================================================ //
const ROUTER = express.Router();

// main ===================================================== //
ROUTER.route("/")
    .get(getUser)
    .patch(patchUser);

// export =================================================== //
module.exports = ROUTER;