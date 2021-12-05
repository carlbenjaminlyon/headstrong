const axios = require('axios');

const getSigns = () => {
  return axios.get('http://sandipbgt.com/theastrologer/api/sunsigns')
  .then((response) => response)
  .catch(err => console.error(err))
}

const getHoroscope = (sign, timeframe) => {
  return axios.get(`http://sandipbgt.com/theastrologer/api/horoscope/${sign}/${timeframe}/`)
    .then((response) => response.data.horoscope)
    .catch(err => console.error(err));

}

module.exports = {
  getHoroscope,
  getSigns
}