const express = require('express');
const router = express.Router();
const managerCards = require('../manager/modelCardManager.js');

router.get('/getCards/:tag', function (req, res) {
    var cards = managerCards.findByTag(req.params.tag);
    res.json(cards);
});

router.get('/getAllCards', function (req,res) {
    managerCards.findAllCards().then(response => {
        console.log("service: ", response)
        res.json(response);
    });
});

module.exports = router;