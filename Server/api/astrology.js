const { Router } = require('express');
const Horoscope = Router();
const { getHoroscope, getSigns } = require('../helpers/astrology');

Horoscope.get('/', (req, res) => {
  getSigns()
  .then(sign => {
    res.send(sign.data)
  })
  .catch(err => console.error(err))
})



Horoscope.get('/:sign&:timeframe', (req, res) => {

  const { sign, timeframe } = req.params;

  getHoroscope(sign, timeframe)
  .then(horoscope => {
    res.send(horoscope)
  })
  .catch(() => res.sendStatus(404));
})

module.exports = {
  Horoscope
}