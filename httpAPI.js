var http = require('http');
var fs = require('fs');
var map = require('through2-map');
var url = require('url');

var server = http.createServer(function(req,res){
	if (req.method != "GET") {
		return res.end("Send me a GET...\n");
	}

	var reqPath = url.parse(req.url);
	var hr = reqPath.query.slice(15,17);
	var mn = reqPath.query.slice(18,20);
	var sc = reqPath.query.slice(21,23);

	var hr = reqPath.query.slice(15,17);
	var mn = reqPath.query.slice(18,20);
	var sc = reqPath.query.slice(21,23);


	res.writeHead(200, { 'Content-Type': 'application/json' });

	if(reqPath.pathname == "/api/parsetime"){
		
		var hr = Number(reqPath.query.slice(15,17));
		var mn = Number(reqPath.query.slice(18,20));
		var sc = Number(reqPath.query.slice(21,23));
		
		res.write("{\"hour\":" + hr + ", \"minute\":" + mn + ", \"second\":" + sc + "}");
		res.end();


	} else if (reqPath.pathname == "/api/unixtime"){ 
		
		var data = Date.parse(reqPath.query.slice(4));
		
		res.write("{\"unixtime\":" + data + "}");
		res.end();

	}

	
     
});

server.listen(process.argv[2]);