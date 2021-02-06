const express = require('express');
const router = express.Router();

// GET to api/users
// Get the users
router.post('/', (req, res) => {
  res.send('bs');
});

// POST to api/users
// User Registration
router.post('/', (req, res) => {
  res.send('bs');
});

module.exports = router;
