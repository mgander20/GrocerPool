const express = require('express');
const astra = require('./config/astra');
const passport = require('passport');
const bodyParser = require('body-parser');
// intialize Express
const app = express();

// passport config
require('./config/passport')(passport);

// Connect to Database
const astraClient = astra();

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

// listen
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));
