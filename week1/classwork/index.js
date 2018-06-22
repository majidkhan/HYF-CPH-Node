
const fs = require('fs');
const util = require('util');


const readFile = util.promisify(fs.readFile);

const readFileOne = readFile("file1.txt", "UTF-8");
const readFileTwo = readFile("file2.txt", "UTF-8");

Promise.all([readFileOne, readFileTwo]).then((data)=>{
console.log("Both files are read");
console.log(data[0] + " " + data[1]);
}).catch(()=>{
console.log("error");
});
