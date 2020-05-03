const manager = {};
const Dao = require('../dao/modelDao');
const Util = require('../Utils/util');


manager.findAll = async function () {
    return await Dao.find();
};

manager.findOne = async function (critter, item) {
    return await Dao.findOne({ [critter]: item });
    
};

manager.add = async function (req) {
    return await Dao.add(Util.buildCritterGET(req));
}

manager.deleteOne = async function (id) {
    return await Dao.deleteOne(id);
}


module.exports = manager;