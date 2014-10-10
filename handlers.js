var path = require('path');
handlers = {};
handlers.helloHapi = function(request, reply) {
  reply("Hello Hapi");
};
handlers.routeReply = function(request, reply) {
  reply('Hello ' + request.params.name);
};
handlers.handling = {
  file: path.join(__dirname, '3_handling', 'index.html')
};

module.exports = handlers;
