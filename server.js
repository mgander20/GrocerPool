const express = require('express');
const connectDB = require('./config/db');
const astra = require('./config/astra')
// intialize Express
const app = express();

// Connect to Database
connectDB();

// requests
app.get('/', (req, res) => {
  astra.connectClient()
  res.json({ msg: 'Response' })
});

// routes
app.use('/api/users', require('./routes/users'));

// listen
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));
