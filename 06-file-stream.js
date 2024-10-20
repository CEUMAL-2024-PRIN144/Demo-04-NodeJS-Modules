import readline from 'readline'; // ES6
import fs from 'fs'; // ES6
//const readline = require('readline'); // CommonJS
//const fs = require('fs'); // CommonJS

const myInterface = readline.createInterface({
    input: fs.createReadStream('./files/input.txt')
});

myInterface.on('line', (fileLine) => {
    console.log(`The line read: ${fileLine}`);
});