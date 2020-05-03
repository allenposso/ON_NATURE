const CardsDao = {};
const card = require('../models/card.js');

CardsDao.findByTag =  function (item) {
   return card.find({ etiquetas: item });
}

CardsDao.findAllCards = function () {
    return card.find();
}

module.exports = CardsDao;