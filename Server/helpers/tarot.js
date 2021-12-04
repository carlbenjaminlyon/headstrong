const axios = require('axios');

const getTarotCards = (num) => {
  return axios.get('https://indiealchemy.com/apis/plateautarot/?count=' + num)
    .then(({data}) => data.cards)
    .catch(err => console.error(err));
};

module.exports = {
  getTarotCards
}