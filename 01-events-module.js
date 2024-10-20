import events from 'events'; // ES6
//const events = require('events'); // CommonJS

const eventEmitter = new events.EventEmitter();

const callback = (data) => {
    console.log(`We have a new user: ${data}.`);
};

eventEmitter.on('new user', callback);
eventEmitter.emit('new user', 'Mark Zuckerberg');