handlers = {};
handlers.helloHapi = function(request, reply) {
  reply("Hello Hapi");
};

module.exports = handlers;
