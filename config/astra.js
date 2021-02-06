require('dotenv').config()

const { createClient } = require("@astrajs/collections");

const connectClient = async () => {
  const astraClient = await createClient({
    astraDatabaseId: process.env.ASTRA_DB_ID,
    astraDatabaseRegion: process.env.ASTRA_DB_REGION,
    username: process.env.ASTRA_DB_USERNAME,
    password: process.env.ASTRA_DB_PASSWORD,
  });

  console.log(astraClient)
}

module.exports = connectClient

