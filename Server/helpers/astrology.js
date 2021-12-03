const axios = require('axios');

const getHoroscope = () => {

  const horoscopes = {
    aquarius: 'https://ohmanda.com/api/horoscope/aquarius',
    pisces: 'https://ohmanda.com/api/horoscope/pisces',
    aries: 'https://ohmanda.com/api/horoscope/aries',
    taurus: 'https://ohmanda.com/api/horoscope/taurus',
    gemini: 'https://ohmanda.com/api/horoscope/gemini',
    cancer: 'https://ohmanda.com/api/horoscope/cancer',
    leo: 'https://ohmanda.com/api/horoscope/leo',
    virgo: 'https://ohmanda.com/api/horoscope/virgo',
    libra: 'https://ohmanda.com/api/horoscope/libra',
    scorpio: 'https://ohmanda.com/api/horoscope/scorpio',
    sagittarius: 'https://ohmanda.com/api/horoscope/sagittarius',
    capricorn: 'https://ohmanda.com/api/horoscope/capricorn'
  };
  
    horoscopes.map(sign => {
      axios.get(`https://ohmanda.com/api/horoscope/${sign}`)
      .then(data => console.log(data))
      .catch(() => res.sendStatus(500));
    })

}

module.exports = {
  getHoroscope
}