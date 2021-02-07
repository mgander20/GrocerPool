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
    groceryCollection = await astra('grocery')
  } catch (e) {
    console.log(e)
    console.error("Could not connect to the collection model on Astra.")
  }

  try {
    jsonRes = await axios.get(
      `https://api.spoonacular.com/food/ingredients/search?apiKey=edcf4ecd48484150bc7d090ea893b937&query=a&number=100&offset=0`
    );

    for (let i = 0; i < jsonRes.data.results.length; i++) {
      let name = jsonRes.data.results[i].name
      const newItem = {
        name: name,
        image: `https://spoonacular.com/cdn/ingredients_250x250/${name}.jpg`,
      };

      // ADD TO DB
      try {
        let saveItem = await groceryCollection.create(newItem)
        console.log(saveItem)
      } catch (error) {
        console.error(error)
      }
    }
    console.log('For Loop Ended')
  } catch (error) {
    console.log(error);
  }

});

// pull all from grocery db
router.get('/groceryDb', async (req, res) => {

  // create collection
  let groceryCollection = null;
  try {
    groceryCollection = await astra('grocery')
  } catch (e) {
    console.log(e)
    console.error("Could not connect to the collection model on Astra.")
  }

  // find apple
  groceryCollection.find({ name: { $eq: "apple" } }).then(res => {
    console.log(res)
  })
})

module.exports = router;
