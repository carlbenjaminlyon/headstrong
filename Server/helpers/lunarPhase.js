const axios = require('axios');

const getLunarPhase = (date) => {
  date = date || new Date();
  const unixTime = date.getTime();

  return axios.get('https://api.farmsense.net/v1/moonphases/?d=' + unixTime)
    .then(({data}) => data[0].Phase)
    .catch(err => console.error(err));
};

module.exports = {
  getLunarPhase
};
