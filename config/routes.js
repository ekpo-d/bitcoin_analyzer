const passport = require('passport'),
      apiRepsonse = require('../utilities/api_response');

const index = require('../routes/index'),
      user = require('../routes/user'),
      trade = require('../routes/trade');

module.exports = (app) => {
  app.use('/', index);
  app.use('/api/1.0', index);
  app.use('/api/1.0/user', user);
  app.use('/api/1.0/trade', passport.authenticate('jwt', { session: false }), trade);
  app.use((req, res, next) => {
    apiRepsonse.sendError("Cannot find this route. Please check the route or method", 404, res);
  });
};
