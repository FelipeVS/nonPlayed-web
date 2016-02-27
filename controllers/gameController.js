var restful = require('node-restful');

module.exports = function(app, route) {

  // Setup the controller for REST
  var rest = restful.model(
    'game',
    app.models.game
  ).methods(['get', 'put', 'post', 'delete']);

  // Register this endpoit with the application
  rest.register(app, route);

  // Return Middleware
  return function(req, res, next) {
    next();
  };
};
