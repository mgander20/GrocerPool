const { default: Axios } = require('axios');
const express = require('express');
const axios = require('axios');
const astra = require('../config/astra');
const router = express.Router();

router.get('/buildDb', async (req, res) => {
  // send a request to api with query letter and offset
  // for each item in the response body, upload to d

  // create collection
  let groceryCollection = null;
  try {
    groceryCollection = await astra('groceries');
  } catch (e) {
    console.log(e);
    console.error('Could not connect to the collection model on Astra.');
  }

  try {
    jsonRes = await axios.get(
      `https://api.spoonacular.com/food/ingredients/search?apiKey=a4800428da6e43348a3b8c9bbd054070&query=g&number=10&offset=0`
    );

    for (let i = 0; i < jsonRes.data.results.length; i++) {
      let name = jsonRes.data.results[i].name;
      let image = jsonRes.data.results[i].image;
      const newItem = {
        name: name,
        image: `https://spoonacular.com/cdn/ingredients_250x250/${image}`,
      };

      // ADD TO DB
      try {
        let saveItem = await groceryCollection.create(newItem);
        console.log(saveItem);
      } catch (error) {
        console.error(error);
      }
    }
    console.log('For Loop Ended');
  } catch (error) {
    console.log(error);
  }
});

// pull all from grocery db
router.get('/getGroceries', async (req, res) => {
  // create collection
  let groceryCollection = null;
  try {
    groceryCollection = await astra('groceries');
    const items = await groceryCollection.find({});
    res.send(items)
    // return {
    //   statusCode:200,
    //   body: JSON.stringify(Object.keys(items).map((i) => items[i]))
    // };
  } catch (e) {
    console.log(e);
    console.error('Could not connect to the collection model on Astra.');
  }
});

// pull all from grocery db
router.get('/getGrocery', async (req, res) => {
  // create collection
  let groceryCollection = null;
  try {
    groceryCollection = await astra('groceries');
    console.log(groceryCollection);
    // find apple
    groceryCollection.find({ name: {$eq:'a'} }).then((data) => {
      res.json(data)
    });
  } catch (e) {
    console.log(e);
    console.error('Could not connect to the collection model on Astra.');
  }
});

module.exports = router;
