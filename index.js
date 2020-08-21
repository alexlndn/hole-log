const fs = require('fs');
const write = require('./helpers/Writter');
const { formatFileName } = require('./helpers/Formatters');

function init(config = {}) {
    const { folder = 'logs' } = config;

    if(!fs.existsSync(folder)) {
        fs.mkdirSync(folder);
    }

    return {
        log: (text) => {
            write(text, 'default', `${folder}/${formatFileName(new Date())}`);
        },
        warn: (text) => {
            write(text, 'WARN', `${folder}/${formatFileName(new Date())}`);
        },
        error: (text) => {
            write(text, 'ERROR', `${folder}/${formatFileName(new Date())}`);
        },
    };
}

module.exports = init;
