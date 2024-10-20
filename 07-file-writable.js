import fs from 'fs'; // ES6
//const fs = require('fs') // CommonJS

const fileStream = fs.createWriteStream('./files/output.txt');

fileStream.write('This is the first line!\n'); 
fileStream.write('This is the second line!\n');
fileStream.end();