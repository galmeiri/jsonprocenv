const fs = require("fs");

module.exports = (envFilePath = "./.env") => {
    try {
        var definitions = JSON.parse(fs.readFileSync(envFilePath));
    } catch (e) {
        if (e.code === "ENOENT") {
            console.log(`Can not find ENV file in ${envFilePath}`);
            return
        } else {
        console.log(e);
        return
        }
    }

    const jsonFlat = (o, res, path) => {
        path = path || '';
        Object.keys(o).forEach((key) => {
            if (o[key] && typeof o[key] === 'object') {
                jsonFlat(o[key], res, `${path}_${key}`);
                return;
            }
            res[`${path.substring(1,)}_${key}`] = o[key];
        });
    }
      
    var res = {};
    jsonFlat(definitions, res);
    Object.keys(res).forEach((key) => {
        process.env[key.toUpperCase()] = res[key];
    });   
};