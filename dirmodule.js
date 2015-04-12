var fs = require('fs');
var path = require('path');

module.exports = function(dir, ext, callback) {
	fs.readdir(dir, function(err, data){
		var files = [];

		if (err)
			callback(err);

		ext = '.' + ext;
		data.forEach(function(file){
			if (path.extname(file) == ext)
				files.push(file);
		});

		callback(null, files);
	});
};