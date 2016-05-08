/* .pipe()

The pipe() function reads data from a readable stream as it becomes available and writes it to a destination writable stream.
*/
var net = require('net');

var server = net.createServer(function (socket) {
  socket.write('Echo server\r\n');
  socket.pipe(socket);
});

/*
The example in the documentation is an echo server, which is a server that sends what it receives. The socket object implements both the readable and writable stream interface, so it is therefore writing any data it receives back to the socket.

This is the equivalent of using the pipe() method using event listeners:
*/
var net = require('net');
net.createServer(function (socket) {
  socket.write('Echo server\r\n');
  socket.on('data', function(chunk) {
    socket.write(chunk);
  });
  socket.on('end', socket.end);
}); 
