const fs = require('fs');
const write = require('./helpers/Writter');
const { formatFileName } = require('./helpers/Formatters');

function init(config = {}) {
    const { folder = 'logs' } = config;

    if(!fs.existsSync(folder)) {
        fs.mkdirSync(folder);
    }

    return {
        log: (anyobject) => {
            write(anyobject, 'default', `${folder}/${formatFileName(new Date())}`);
        },
        warn: (anyobject) => {
            write(anyobject, 'WARN', `${folder}/${formatFileName(new Date())}`);
        },
        error: (anyobject) => {
            write(anyobject, 'ERROR', `${folder}/${formatFileName(new Date())}`);
        },
    };
}

module.exports = init;
