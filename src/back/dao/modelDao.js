const Dao = {};
const metricas = require('../models/escheme');


Dao.find = async function () {
    return await metricas.find();
};

Dao.findOne = async function (item) {
    return await metricas.findOne(item);
}

Dao.add = async function (item) {
    const metric = new metricas(item);
    await metric.save();
}

Dao.deleteOne = async function (id) {
    await metricas.findByIdAndDelete(id);
}


Dao.updateMany = async function (critter, item) {
    await metricas.updateMany(critter, item);
}



module.exports = Dao;