require('dotenv').config();
const { createClient } = require('@astrajs/collections');

const connectClient = async () => {
  try {
    const astraClient = await createClient({
      astraDatabaseId: process.env.ASTRA_DB_ID,
      astraDatabaseRegion: process.env.ASTRA_DB_REGION,
      username: process.env.ASTRA_DB_USERNAME,
      password: process.env.ASTRA_DB_PASSWORD,
    });
    console.log('Connected to astra');
    return astraClient;
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectClient;
