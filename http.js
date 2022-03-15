var http = require('http');
http.createServer(function(req, res)
{
   res.writeHead(200, {'Content-Type' : 'Text/html'})
   res.end("hello node")
}).listen(8000, "127.0.0.1")