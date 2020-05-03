const managerCards = {};
const CardsDao = require('../dao/modelCardsDao.js');

managerCards.findByTag = function (critter) {
    return CardsDao.findByTag(critter);
};

managerCards.findAllCards = function () {
    return CardsDao.findAllCards();
};

module.exports = managerCards;