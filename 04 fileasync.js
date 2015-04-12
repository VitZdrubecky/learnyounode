var fs = require('fs');

var content = fs.readFile(process.argv[2], 'utf8', function(err, data){
	var file_array = data.split('\n');

	console.log(file_array.length - 1);
});