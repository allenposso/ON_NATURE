const express = require('express');
const router = express.Router();
const managerCategories = require('../manager/modelCategoriesManager.js');

router.get('/getCategories', function (req,res) {
    managerCategories.findAllCategories().then(response => {
        res.json(response);
    });
});

module.exports = router;