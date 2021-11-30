const axios = require('axios');
const config = require('../config');


const getWeatherByGeolocation = (latitude, longitude) => {

  const url = `http://api.weatherbit.io/v2.0/current?lat=${latitude}&lon=${longitude}&key=${process.env.weatherbit_token}`;

  return axios.get(url)
    .then(({ data }) => data)
    .catch((err) => console.error(err));
};

module.exports = {
  getWeatherByGeolocation
};
