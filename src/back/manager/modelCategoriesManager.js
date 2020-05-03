const managerCategories = {};
const CategoriesDao = require('../dao/modelCategoriesDao.js');

managerCategories.findAllCategories = function () {
    return CategoriesDao.findAllCategories();
};

module.exports = managerCategories;