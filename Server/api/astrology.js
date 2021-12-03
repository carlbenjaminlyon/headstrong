const { Router } = require('express');
const Horoscope = Router();
const { getHoroscope } = require('../helpers/astrology');

Horoscope.get('/', (req, res) => {
  const { horoscopes } = req.body;

  return getHoroscope(horoscopes)
  .then(data => res.status(200).send(data))
  .catch(() => res.sendStatus(404));
})

module.exports = {
  Horoscope
}