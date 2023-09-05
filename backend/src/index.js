// requires ============================================ //
// libs ------------------------------------------------ //
const express = require("express");
const cors = require("cors");
// routes ---------------------------------------------- //
const {
    userRoute,
    listTasksRoute,
    activeTaskRoute
} = require("./routes/index");

// constants =========================================== //
const APP = express();
const PORT = 5000;

// main ================================================ //
APP.use(express.json());
APP.use(cors());

APP.use("/api/tasks", listTasksRoute);
APP.use("/api/tasks", activeTaskRoute);
APP.use("/api/user", userRoute);

APP.listen(
    PORT,
    () => {
        console.log(
            `CORS mode enabled`, `\n`,
            `Server started at http://localserver:${PORT}`, `\n`
        );
    }
);