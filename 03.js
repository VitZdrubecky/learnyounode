var fs = require('fs');

var buffer = fs.readFileSync(process.argv[2]);

var file = buffer.toString();

var file_array = file.split('\n');

console.log(file_array.length - 1);