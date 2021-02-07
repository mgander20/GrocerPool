const { default: Axios } = require('axios');
const express = require('express');
const axios = require('axios');
const router = express.Router();

router.get('/buildDb', async (req, res) => {
  // send a request to api with query letter and offset
  // for each item in the response body, upload to d

  // create collection

  try {
    jsonRes = await axios.get(
      `https://api.spoonacular.com/food/ingredients/search?apiKey=edcf4ecd48484150bc7d090ea893b937&query=a&number=1000&offset=0`
    );
    console.log(jsonRes.data.results);
    for (item in jsonRes.data.results) {
      const newItem = {
        name: item.name,
        image: `https://spoonacular.com/cdn/ingredients_250x250/${item.name}.jpg`,
      };

      // ADD TO DB
    }
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
