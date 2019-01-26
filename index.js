
let environment_variables = {};
for(let i=0; i < Object.keys(process.env).length; ++i) {
    let env_var_key = Object.keys(process.env)[i];
    if(env_var_key.indexOf("REACT_APP") !== -1){
        let key = env_var_key.replace('REACT_APP_', '');
        environment_variables[key] = process.env[Object.keys(process.env)[i]];
    }
}
module.exports = environment_variables;