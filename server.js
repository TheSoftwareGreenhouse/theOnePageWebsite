var static = require('node-static');
var http = require('http');

var file = new(static.Server)('./public');

var server = http.createServer(function(request, response) {
  request.addListener('end', function() {
    file.serve(request, response);
  });
});

module.exports = server;

if (!module.parent) server.listen(8383);
