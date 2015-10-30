var http = require("http");
var fs = require('fs');

fs.readFile('/application/index.html', function (err, html) {
  http.createServer(function(request, response) {
    response.writeHeader(200, {"Content-Type": "text/html"});
    response.write("Hello, World! This is Node.js app version 17.<br /><br />");

    if (err) {
      response.write(err.message);
    } else {
      response.write(html);
    }

    response.end();
  }).listen(8888);
});
