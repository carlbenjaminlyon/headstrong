const { Router } = require('express');
const Horoscope = Router();
const { getHoroscope } = require('../helpers/astrology');

Horoscope.post('/', (req, res) => {
  const { horoscopes } = req.body;

  return getHoroscope(horoscopes)
  .then(horoscope => {
    console.log('horoscopeeee: ', horoscope);
    res.status(200).send(horoscope)})
  .catch(() => res.sendStatus(404));
})

module.exports = {
  Horoscope
}