var paddy = require("./paddyModule.js");
var net = require('net');

var date = new Date();
var data = date.getFullYear() +"-"+paddy(date.getMonth()+1,2)+"-"+paddy(date.getDate(),2)+" "+paddy(date.getHours(),2)+":"+paddy(date.getMinutes(),2);

var server = net.createServer(function(socket){
  socket.end(data + '\n');
});

server.listen(process.argv[2]);

/*
socket.end([data], [encoding])#
Half-closes the socket. i.e., it sends a FIN packet. It is possible the server will still send some data.

If data is specified, it is equivalent to calling socket.write(data, encoding) followed by socket.end().
*/
