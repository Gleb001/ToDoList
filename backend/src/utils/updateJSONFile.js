// requires ================================================= //
const fs = require("fs");

// main ===================================================== //
/**
 * Действие по изменению JSON
 * @callback changeObject
 * @param {JSON} data
 * @returns {JSON}
 */
/**
  * Обновление JSON файла по указанному пути (path)
  * соответствующим образом (callback)
  * @param {string} path - путь к JSON файлу
  * @param {changeObject} callback - действие по изменению JSON
  * @returns {JSON}
  */
function updateJSONFile(path, callback) {

    // изменить JSON в переменной
    let file = require(path);
    callback(file);

    // изменить JSON в файле
    fs.writeFileSync(
        path,
        JSON.stringify(file, null, 2),
        error => console.log(error)
    );

    return file;

}

// export =================================================== //
module.exports = {updateJSONFile};