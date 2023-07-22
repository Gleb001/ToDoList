// requires -------------------------------------------- //
const fs = require("fs");

// main ------------------------------------------------ //
function updateJSONFile(path, callback) {

    // update json data
    let data = getJSON(path);
    data = callback(data);

    // write json data
    fs.writeFileSync(
        path,
        JSON.stringify(data, null, 2),
        error => console.log(error)
    );

    return data;

}
function getJSON(path) {return require(path); }

// export ---------------------------------------------- //
module.exports = {updateJSONFile, getJSON};