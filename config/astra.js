require('dotenv').config();
const { createClient } = require('@astrajs/collections');

module.exports = async ( collection ) => {
  try {
    const astraClient = await createClient({
      astraDatabaseId: process.env.ASTRA_DB_ID,
      astraDatabaseRegion: process.env.ASTRA_DB_REGION,
      username: process.env.ASTRA_DB_USERNAME,
      password: process.env.ASTRA_DB_PASSWORD,
    });
    const users = await astraClient.namespace(process.env.ASTRA_DB_KEYSPACE).collection(collection)
    console.log('Connected to astra');
    return users

  } catch (error) {
    console.log(error);
  }
};


