// requires -------------------------------------------- //
const fs = require("fs");

// main ------------------------------------------------ //
function updateJSONFile(path, callback) {
    let data = getJSON(path);
    callback(data);
    fs.writeFileSync(
        path,
        JSON.stringify(data, null, 2),
        error => console.log(error)
    );
}
function getJSON(path) { return require(path); }

// export ---------------------------------------------- //
module.exports = {updateJSONFile, getJSON};