const express = require('express');
const connectDB = require('./config/astra');
const astra = require('./config/astra');
const passport = require('passport');
var flash = require('connect-flash');

// intialize Express
const app = express();

// passport config
require('./config/passport')(passport);

// Connect to Database
connectDB();

// requests
app.get('/', (req, res) => {
  astra.connectClient();
  res.json({ msg: 'Response' });
});

// middleware
app.use(flash());

// routes
app.use('/api/users', require('./routes/users'));

// listen
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));
