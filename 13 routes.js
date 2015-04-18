var http = require('http');
var url = require('url');

http.createServer(function(req, res){
	if (req.method == 'GET')
	{
		// second parameter tells url to parse query using querystring module so that we have a nice object to work with
		var parsed_url = url.parse(req.url, true);

		if (parsed_url.pathname == '/api/parsetime')
		{
			var iso = parsed_url.query.iso;
			var date = new Date(iso);
			var res_date = {'hour': date.getHours(),
							'minute': date.getMinutes(),
							'second': date.getSeconds()};

			res.writeHead(200, { 'Content-Type': 'application/json' });
			res.end(JSON.stringify(res_date));
		}
		else if (parsed_url.pathname == '/api/unixtime')
		{
			var iso = parsed_url.query.iso;
			var date = new Date(iso);
			var res_date = {'unixtime': date.getTime()};

			res.writeHead(200, { 'Content-Type': 'application/json' });
			res.end(JSON.stringify(res_date));
		}
		else 
		{
			res.writeHead(400, { 'Content-Type': 'text/plain' });
			res.end('Wrong resource path.\n');
		}
		 // if (/^\/api\/parsetime/.test(req.url))
		 //   result = parsetime(time)
		 // else if (/^\/api\/unixtime/.test(req.url))
		 //   result = unixtime(time)

		 // if (result) {
		 //   res.writeHead(200, { 'Content-Type': 'application/json' })
		 //   res.end(JSON.stringify(result))
		 // } else {
		 //   res.writeHead(404)
		 //   res.end()
		 // }
	}
}).listen(process.argv[2]);