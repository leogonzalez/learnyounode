var http = require("http");
var server = http.createServer(function(request, response) {
  response.writeHead(200, {"Content-Type": "text/html"});
  response.write("<html>");
  response.write("<head>");
  response.write("<title>Hi Leonardo</title>");
  response.write("</head>");
  response.write("<body>");
  response.write("Hello Juliana e Leonardo sasasa!");
  response.write("</body>");
  response.write("</html>");
  response.end();
});

server.listen(8000);
// console.log("Server is listening");
