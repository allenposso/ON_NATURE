const mongoose = require('mongoose');
const Card = mongoose.Schema;

var cards = new Card({
    id: Object,
    title: String,
    image: String,
    price: String,
    tags: [String]
});

module.exports = mongoose.model('Card', cards);