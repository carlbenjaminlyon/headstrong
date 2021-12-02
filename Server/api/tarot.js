const {Router} = require('express');
const TarotCards = Router();
const {getTarotCards} = require('../helpers/tarot');

TarotCards.get('/', (req, res) => {
  const { num } = req.body;

  return getTarotCards(num)
    .then(data => res.status(200).json(data))
    .catch(() => res.sendStatus(404));
});

module.exports = {
  TarotCards
}