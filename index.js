"use strict";
function get_envs() {
    var environment_variables = {};
    Array.prototype.forEach.call(Object.keys(process.env), function(key){
        environment_variables[key.replace("REACT_APP_", "")] = process.env[key];
    });
    return environment_variables;
}

module.exports = get_envs();