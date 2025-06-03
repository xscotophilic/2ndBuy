const passport = require('passport');

module.exports = (app) => {
  //Auth routes
  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email'],
    })
  );

  app.get(
    '/auth/google/callback',
    passport.authenticate('google'),
    (req, res) => {
      const redirectUrl = `${process.env.CORS_ORIGIN || 'http://localhost:3000'}/dashboard`;
      res.redirect(redirectUrl);
    }
  );

  app.get('/api/logout', (req, res, next) => {
    req.logout(function(err) {
      if (err) { return next(err); }
      const redirectUrl = `${process.env.CORS_ORIGIN || 'http://localhost:3000'}`;
      res.redirect(redirectUrl);
    });
  }); //Auth routes ends

  app.get('/api/current_user', (req, res) => {
    res.send(req.user);
  });
};
