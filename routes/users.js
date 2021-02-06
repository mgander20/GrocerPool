/* eslint-disable eqeqeq */
const express = require('express');
const bcrypt = require('bcryptjs');
const passport = require('passport');
const users = require('../config/astra');
// Load user model

const router = express.Router();

// login success response
router.get('/login-success', (req, res) => {
  res.json({ msg: 'login success' });
});

// login failure response
router.get('/login-failure', (req, res) => {
  res.json({ msg: 'login failure' });
});

// login form post
router.post('/login', (req, res, next) => {
  passport.authenticate('local', {
    successRedirect: '/api/users/login-success',
    failureRedirect: '/api/users/login-failure',
    failureFlash: true,
  })(req, res, next);
});

// register form post
router.post('/register', async (req, res) => {
  const errors = [];

  if (req.body.password != req.body.password2) {
    errors.push({ text: 'Passwords do not match' });
  }
  if (req.body.password.length < 6) {
    errors.push({ text: 'Password must be at least 6 characters' });
  }
  if (errors.length > 0) {
    res.render('users/register', {
      errors,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      phoneNumber: req.body.phoneNumber,
      password: req.body.password,
      password2: req.body.password2,
    });
  } else {
    let user = await User.findOne({ email: req.body.email });
    if (user) {
      req.flash('error_msg', 'email already registered');
      res.redirect('/users/register');
    } else {
      const newUser = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        phoneNumber: req.body.phoneNumber,
        password: req.body.password,
      });
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, async (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          try {
            let saveUser = await newUser.save(); //when fail its goes to catch
            console.log(saveUser); //when success it print.
            console.log('after save');
            res.json({ msg: 'User Saved' });
          } catch (err) {
            console.log('err' + err);
            res.status(500).send(err);
          }
        });
      });
    }
  }
});

// Logout user
router.get('/logout', (req, res) => {
  req.logout();
  res.json({ msg: 'logged out' });
});

module.exports = router;
