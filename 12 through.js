var http = require('http');
var map = require('through2-map');

http.createServer(function(req, res){
	if (req.method == 'POST')
	{
		req.pipe(map(function(chunk){
			return chunk.toString().toUpperCase();
		})).pipe(res);
	}
	else
	{
		res.end('This is not really a POST, is it?\n');
	}
}).listen(process.argv[2]);