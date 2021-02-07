const { default: Axios } = require('axios');
const express = require('express');
const axios = require('axios');
const astra = require('../config/astra');
const { response } = require('express');
const router = express.Router();

// Get the grocery list based off of user-id
router.get('/:id', async (req, res) => {
  const userId = req.params.id;

  let groceryListCollection = null;
  try {
    groceryListCollection = await astra('groceryList');
  } catch (e) {
    console.log(e);
    console.error('Could not connect to the collection model on Astra.');
  }

  try {
    const groceryList = await groceryListCollection.find({
      userId: { $eq: userId },
    });
    // returns grocery list as json
    res.json(groceryList);
  } catch (err) {
    console.log('Failed to retrieve grocery list.');
    console.error(error);
  }
});

// POST grocery list, requires array of items + userId to be sent (can we get this from the login token?)
router.post('/', async (req, res) => {
  // get user id from request body
  const body = req.body;
  const userId = req.body.userId;
  const items = req.body.items;

  // connect to the collection
  let groceryListCollection = null;
  try {
    groceryListCollection = await astra('groceryList');
  } catch (e) {
    console.log(e);
    console.error('Could not connect to the collection model on Astra.');
  }

  const newGroceryList = {
    userId: userId,
    items: items,
  };

  // create the list in the collection
  try {
    const groceryList = await groceryListCollection.create(newGroceryList);
    res.json(groceryList);
  } catch (err) {
    console.log('Failed to post the grocery list.');
    console.error(err);
  }
});

module.exports = router;
