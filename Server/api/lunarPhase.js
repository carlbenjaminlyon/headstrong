const {Router} = require('express');
const MoonPhase = Router();
const {getLunarPhase} = require('../helpers/lunarPhase');

MoonPhase.get('/', (req, res) => {
  const { date } = req.body;

  return getLunarPhase(date)
    .then(data => res.status(200).json(data))
    .catch(() => res.sendStatus(404));
});

module.exports = {
  MoonPhase
}