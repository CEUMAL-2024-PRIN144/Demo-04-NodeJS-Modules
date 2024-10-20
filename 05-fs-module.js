import fs from 'fs'; // ES6
//const fs = require('fs'); // CommonJS

const readDataCallback = (error, data) => {
    if (error) {
        console.log(`Something went wrong: ${error}`);
    } else {
        console.log(`Provided file contained:\n\n${data}`);
    }
};

fs.readFile('./files/input.txt', 'utf-8', readDataCallback);