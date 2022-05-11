console.log('client!');
const { logQueue } = require('../bullConfig');

logQueue.add("logQueue", {body: `test${Date.now()}`}, {attempts: 4, backoff: 1000});