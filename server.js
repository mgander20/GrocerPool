const express = require('express');
const astra = require('./config/astra');
const passport = require('passport');

// intialize Express
const app = express();

// passport config
require('./config/passport')(passport);

// Connect to Database
const astraClient = astra();

// requests
app.get('/', (req, res) => {
  res.json({ msg: 'Response' });
});

// routes
app.use('/api/users', require('./routes/users'));

// listen
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));
