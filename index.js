let environment_variables = {};
for(let i=0; i < Object.keys(process.env).length; ++i) {
    environment_variables[Object.keys(process.env)[i].replace('REACT_APP_', '')] = process.env[Object.keys(process.env)[i]];
}
module.exports = environment_variables;