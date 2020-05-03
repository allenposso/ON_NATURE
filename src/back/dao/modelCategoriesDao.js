const CategoriesDao = {};
const categorie = require('../models/categorie.js');

CategoriesDao.findAllCategories = function () {
    return categorie.find();
}

module.exports = CategoriesDao;