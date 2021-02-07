const LocalStrategy = require('passport-local').Strategy;
const passport = require('passport');

const bcrypt = require('bcryptjs');
const astra = require('../config/astra');

// load user model

module.exports = async function (passport) {
  // load user collection
  let usersCollection = null;
  try {
    usersCollection = await astra('users');
    passport.use(
      new LocalStrategy(
        {
          usernameField: 'email',
        },
        async (email, password, done) => {
          try {
            console.log(`email:${email}   password:${password}`);
            // match user
            user = await usersCollection.findOne({ email: { $eq: email } });
            console.log(`user = ${user}`);
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
          } catch (error) {
            console.log(error);
          }
        }
      )
    );

    // serialize
    passport.serializeUser(function (user, done) {
      done(null, user);
    });

    passport.deserializeUser(function (user, done) {
      done(null, user);
    });
  } catch (e) {
    console.log(e);
    console.error('Could not connect to the collection model on Astra.');
  }
};
