var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req,res){

  // open the text file as a Stream object
  var readStream = fs.createReadStream(process.argv[3]);

  //once the stream is open, pipe it to the res client
  readStream.on('open',function(){
    readStream.pipe(res);
  })

});

//start server
server.listen(process.argv[2]);

/* oficial solution

var server =http.createServer(function(req,res){
  res.writeHead(200,{'content-type':'text/plain'});

  fs.createReadStream(process.argv[3]).pipe(res);

server.listen(process.argv[2]);

});
