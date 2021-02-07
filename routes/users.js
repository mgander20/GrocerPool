const express = require('express');
const bcrypt = require('bcryptjs');
const passport = require('passport');
const astra = require('../config/astra');
const axios = require('axios');

const router = express.Router();

// collection definition
// const connectToUsers = async () => {
//   let users = null;
//   try {
//     users = await astra()
//     users.find({}).then(res => {
//       console.log(res)
//     })

//   } catch (e) {
//     console.error(e)
//   }
// }

// connectToUsers()

// login form post
router.post('/login', (req, res, next) => {
  passport.authenticate('local', (empty, user) => {
    console.log(user);
    res.json(user);
  })(req, res, next);
});

// register form post
router.post('/register', async (req, res) => {
  //create collection
  let usersCollection = null;
  try {
    usersCollection = await astra('users');
  } catch (e) {
    console.log(e);
    console.error('Could not connect to the collection model on Astra.');
  }
  const errors = [];
  if (req.body.password != req.body.password2) {
    errors.push({ text: 'Passwords do not match' });
  }
  if (req.body.password.length < 6) {
    errors.push({ text: 'Password must be at least 6 characters' });
  }
  if (errors.length < 1) {
    try {
      let user = await usersCollection.findOne({
        email: { $eq: req.body.email },
      });
      if (!user) {
        // const newUser = new User({
        //   firstName: req.body.firstName,
        //   lastName: req.body.lastName,
        //   email: req.body.email,
        //   phoneNumber: req.body.phoneNumber,
        //   password: req.body.password,
        // });
        try {
          // connect to location api using addr, city, province
          let address = req.body.address;
          let city = req.body.city;

          address = address.replace(/\s/g, '+');
          city = city.replace(/\s/g, '+');

          try {
            const location = await axios.get(
              `https://api.radar.io/v1/geocode/forward?query=${address}+${city}+${req.body.provinceCode}`,
              {
                headers: {
                  Authorization: process.env.LOCATION_KEY,
                },
              }
            );
            lat = location.data.addresses[0].latitude;
            lon = location.data.addresses[0].longitude;

            const newUser = {
              firstName: req.body.firstName,
              lastName: req.body.lastName,
              email: req.body.email,
              phoneNumber: req.body.phoneNumber,
              password: req.body.password,
              address: req.body.address,
              postalCode: req.body.postalCode,
              city: req.body.city,
              provinceCode: req.body.provinceCode,
              lat,
              lon,
            };
            bcrypt.genSalt(10, (err, salt) => {
              bcrypt.hash(newUser.password, salt, async (err, hash) => {
                if (err) throw err;
                newUser.password = hash;
                try {
                  //let saveUser = await newUser.save(); //when fail its goes to catch
                  let saveUser = await usersCollection.create(newUser);
                  console.log(saveUser); //when success it print.
                  console.log('after save');
                  res.json({ msg: 'User Saved' });
                } catch (err) {
                  console.log('err' + err);
                  res.status(500).send(err);
                }
              });
            });
          } catch (error) {
            console.log(error);
          }
        } catch (error) {
          console.log(error);
        }
      }
    } catch (error) {}
  } else {
    console.log(errors);
  }
});

// Get all users
router.get('/getUsers', async (req, res) => {
  let usersCollection = null;
  try {
    usersCollection = await astra('users');
  } catch (e) {
    console.log(e);
    console.error('Could not connect to the collection model on Astra.');
  }

  usersCollection.find({}).then((res) => {
    console.log(res);
  });
});

// Get 1 user
router.post('/getUser', async (req, res) => {
  let usersCollection = null;
  try {
    usersCollection = await astra('users');
  } catch (e) {
    console.log(e);
    console.error('Could not connect to the collection model on Astra.');
  }

  usersCollection.find({ email: { $eq: req.body.email } }).then((user) => {
    res.json(user);
  });
});

// Logout user
router.get('/logout', (req, res) => {
  req.logout();
  res.redirect(`${process.env.FRONTEND_HOST}`);
});

module.exports = router;
