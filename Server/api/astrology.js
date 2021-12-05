const { Router } = require('express');
const Horoscope = Router();
const { getHoroscope } = require('../helpers/astrology');

Horoscope.get('/', (req, res) => {
  getHoroscope(horoscopes)
  .then(horoscope => {
    console.log('horoscopeeee: ', horoscope);
    res.send(horoscope)})
  .catch(() => res.sendStatus(404));
})

module.exports = {
  Horoscope
}