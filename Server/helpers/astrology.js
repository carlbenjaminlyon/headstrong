const axios = require('axios');

const getHoroscope = (sign) => {

  return axios.get(`https://ohmanda.com/api/horoscope/${sign}`)
  .then(data => console.log('getHoroscope!!!!: ', data))
  .catch(() => res.sendStatus(500));

}

module.exports = {
  getHoroscope
}