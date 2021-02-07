const express = require('express');
const astra = require('./config/astra');
const passport = require('passport');
const bodyParser = require('body-parser');
const cors = require('cors');
const { ensureAuthenticated } = require('./helpers/authHelper');
// intialize Express
const app = express();

//use cors to allow cross origin resource sharing
app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true,
  })
);

// passport config
require('./config/passport')(passport);

// Connect to Database
// const connectToUsers = async () => {
//   try {
//     const users = await astra()
//   } catch (e) {
//     console.error(e)
//   }
// }

// middleware
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// passport middleware
app.use(passport.initialize());

// parse application/json
app.use(bodyParser.json());

// requests
app.get('/api/auth', ensureAuthenticated, (req, res) => {
  res.json({ msg: 'authenticated' });
});

// routes
app.use('/api/users', require('./routes/users'));
app.use('/api/grocery', require('./routes/grocery'));
app.use('/api/groceryList', require('./routes/groceryList'));

// listen
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));
