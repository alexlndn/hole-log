function formatDate(date) {
    const year = date.getFullYear();
    const month = `0${date.getMonth() + 1}`.slice(-2);
    const day = `0${date.getDate()}`.slice(-2);
    const hour = `0${date.getHours()}`.slice(-2);
    const minute = `0${date.getMinutes()}`.slice(-2);
    const second = `0${date.getSeconds()}`.slice(-2);
    const millis = `00${date.getMilliseconds()}`.slice(-3);

    return `${year}-${month}-${day} ${hour}:${minute}:${second}.${millis}`;
}

function fileDateFormat(date) {
    const year = date.getFullYear();
    const month = `0${date.getMonth() + 1}`.slice(-2);
    const day = `0${date.getDate()}`.slice(-2);
    return `${year}-${month}-${day}`;
}

function formatFileName(date) {
    return `logfile__${fileDateFormat(date)}.log`;
}

module.exports = { formatDate, formatFileName };
