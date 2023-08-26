// requires ================================================= //
// libs ----------------------------------------------------- //
const path = require("path");
// utils ---------------------------------------------------- //
const { updateJSONFile } = require("../../utils/updateJSONFile");

// constants ================================================ //
const PATH_TO_USER = path.resolve(
    __dirname,
    "../../data/user.json"
);

// main ===================================================== //
async function getUser(req, res) {
    let { body } = req;
    let userData = require(PATH_TO_USER);
    if (body.length) {
        userData = body.reducer(
            (obj, key) => obj[key] = userData[key],
            {}
        );
    }
    res.json(userData);
}
async function postUser(req, res) {
    let { body } = req;
    updateJSONFile(
        PATH_TO_USER,
        user => {
            for (const key in body) {
                user[key] = body[key];
            }
            return user;
        }
    );
    res.json(body);
}

// exports ================================================== //
module.exports = {
    getUser,
    postUser
};