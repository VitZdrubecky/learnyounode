var dirmodule = require('./dirmodule');

var dir = process.argv[2];
var ext = process.argv[3];

dirmodule(dir, ext, function(err, files){
	if (err)
		console.log('Error occured');

	files.forEach(function(file){
		console.log(file);
	});
});