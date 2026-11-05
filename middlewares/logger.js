const fs = require('fs');


function logger(req, res, next) {
    const log = `${new Date().toLocaleString()} ${req.method} ${req.originalUrl}\n`;

    console.log(log);

    FileSystem.appendFile('access.log', log, err => {
        if(err) console.log('could not write log: ', err);
    });

    next();
}    

module.exports = logger;