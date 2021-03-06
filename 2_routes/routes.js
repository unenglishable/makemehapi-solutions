var path = require('path');
var Hapi = require('hapi');
var server = Hapi.createServer('localhost', Number(process.argv[2] || 8080));
var handlers = require(path.join(__dirname, '..', 'handlers'));

server.route({path: '/{name}', method:'GET', handler: handlers.routeReply});
server.start();
