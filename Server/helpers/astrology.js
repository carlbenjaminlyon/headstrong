const axios = require('axios');

const getHoroscope = (sign) => {
  return axios.get(`https://cors-anywhere.herokuapp.com/http://ohmanda.com/api/horoscope/${sign}`)
  .then(({ data }) => data)
  .catch((err) => console.error('there was an error:', err));

}

module.exports = {
  getHoroscope
}