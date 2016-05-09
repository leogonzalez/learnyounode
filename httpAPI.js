var http = require('http');
var fs = require('fs');
var map = require('through2-map');
var url = require('url');

var server = http.createServer(function(req,res){
	if (req.method != "POST") {
		return res.end("Send me a POST...\n")
	}

	if(req.url == "/unixtime"){
		// hendles unix time and transforms in Json
		req.pipe(map(function(chunk){
			
			return chunk.url.;
		})).pipe(res);

	} else { 

		req.pipe(map(function(chunk){
		return chunk.url.;
		})).pipe(res);

	}

	
     
});

server.listen(process.argv[2]);