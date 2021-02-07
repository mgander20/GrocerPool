const express = require('express');
const astra = require('./config/astra');
const passport = require('passport');
const bodyParser = require('body-parser');
// intialize Express
const app = express();

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

// parse application/json
app.use(bodyParser.json());

// requests
app.get('/', (req, res) => {
  res.json({ msg: 'Response' });
});

// routes
app.use('/api/users', require('./routes/users'));
app.use('/api/grocery', require('./routes/grocery'));

// listen
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));
