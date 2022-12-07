const geoCoder = require("node-geocoder")

const options = {
  provider: process.env.GEOCODER_PROVIDER,
  apiKey: process.env.GEOCODER_API_KEY, 
  formatter: null
};

const geocoder = geoCoder(options);

module.exports = geocoder