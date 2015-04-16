var http = require('http');
var fs = require('fs');

var port = process.argv[2];
var file = process.argv[3];

var file_stream = fs.createReadStream(file);

http.createServer(function(request, response){
	file_stream.pipe(response);
}).listen(Number(port));