const Metricas = require('../models/escheme');
const util = {};

util.buildItem = function(req){
    return {
        valor: req.params.valor,
        fecha: req.params.fecha,
        hora: req.params.hora,
    };
}

util.buildCritterGET = function(req){
    return { [req.params.critter]: req.params.compare };
}

util.buildCritter = function(list, item){
    var obj ={};
    list.forEach(element => {
        console.log(obj[element]);
    });
}
module.exports = util;