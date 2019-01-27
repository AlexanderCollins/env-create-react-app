"use strict";
function get_envs() {
    var environment_variables = {};
    Object.keys(process.env).foreach(function(key){
        environment_variables[key.replace("REACT_APP_", "")] = process.env[key];
    });
    return environment_variables;
}

module.exports = get_envs();