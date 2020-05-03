const mongoose = require('mongoose');
const Categorie = mongoose.Schema;

var categorie = new Categorie({
    id: Object,
    title: String,
    image: String,
    tag: String
});

module.exports = mongoose.model('Categorie', categorie);