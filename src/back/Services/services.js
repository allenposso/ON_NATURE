const express = require('express');
const router = express.Router();
const manager = require('../manager/modelManager');

/**
 * get the list of elements in collection
 * @returns {Object}
 */
router.get('/data', async function (req, res) {
    res.json(await manager.findAll());
    res.json({status:'get all'});
});

/**
 * add a object to the collection 
 * @returns {Object}
 */
router.post('/data/add', async function (req, res) {
    req.body.valor = req.body.valor == "true";
    await manager.add(req.body);
    res.json({status:'added'});
});

/**
 * delete by one on the list of elements in dataBase
 * @returns {Object}
 */
router.delete('/data/delete/:id', async function (req, res) {
    await manager.deleteOne(req.params.critter, req.params.value);
    res.json({status:'deleted'});
});


/**
 * get the instance of the doc in collection by critter
 * @returns {Object}
 */
router.post('/data/onlyGet', async function (req, res) {
    await manager.findOne(req);
    res.json({status:'obtained'});
});


/**
 * update all the instances of the doc by critter in collection
 * @returns {Object}
 */
router.get('/library/put/:critter/:compare/build/:valor/:fecha/:hora', async function (req, res) {
    await manager.updateOne(req);
    res.send('updated');
});

module.exports = router;