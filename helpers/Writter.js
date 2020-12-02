const fs = require('fs');
const { formatDate } = require('./Formatters');

async function write(log, channel, file) {
    if (typeof(log) === 'object') {
        log = JSON.stringify(log, null, 2);
    }
    const timestamp = formatDate(new Date());
    const nl = process.platform.startsWith('win') ? '\r\n' : '\n';
    const content = `[${channel}] ${timestamp}: ${log}${nl}`;
    await fs.promises.appendFile(file, content, { encoding: 'utf8', flag: 'a' });
}

module.exports = write;
