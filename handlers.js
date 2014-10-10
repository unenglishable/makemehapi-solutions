handlers = {};
handlers.helloHapi = function(request, reply) {
  reply("Hello Hapi");
};
handlers.routeReply = function(request, reply) {
  reply('Hello ' + request.params.name);
};

module.exports = handlers;
