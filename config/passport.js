const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs');
const astra = require('../config/astra');

// load user model

module.exports = async function (passport) {

  // load user collection
  let usersCollection = null;
  try {
    usersCollection = await astra('users')
  } catch (e) {
    console.log(e)
    console.error("Could not connect to the collection model on Astra.")
  }

  passport.use(
    new LocalStrategy(
      {
        usernameField: 'email',
      },
      async (email, password, done) => {
        // match user
        user = await usersCollection.findOne({ email });
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
    usersCollection.findById(id, function (err, user) {
      done(err, user);
    });
  });
};
