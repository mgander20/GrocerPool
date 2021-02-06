const config = require('config');

const { createClient } = require("@astrajs/collections");


const astraClient = await createClient({
  astraDatabaseId: config.get.ASTRA_DB_ID,
  astraDatabaseRegion: config.get.ASTRA_DB_REGION,
  username: config.get.ASTRA_DB_USERNAME,
  password: config.get.ASTRA_DB_PASSWORD,
});

const users = astraClient.namespace("app").collection(users)

