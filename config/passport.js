const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs');

// load user model

module.exports = function (passport) {
  passport.use(
    new LocalStrategy(
      {
        usernameField: 'email',
      },
      async (email, password, done) => {
        // match user
        user = await User.findOne({ email });
        if (!user) {
          return done(null, false, { message: 'No user found' });
        }
        // match password
        bcrypt.compare(password, user.password, (err, isMatch) => {
          if (err) throw err;
          if (isMatch) {
            return done(null, user);
          }
          return done(null, false, { message: 'password incorrect' });
        });
      }
    )
  );

  // serialize
  passport.serializeUser(function (user, done) {
    done(null, user.id);
  });

  passport.deserializeUser(function (id, done) {
    User.findById(id, function (err, user) {
      done(err, user);
    });
  });
};
