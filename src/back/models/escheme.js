const mongoose = require('mongoose');
const Metrica = mongoose.Schema;

var metricas = new Metrica({
    id: Object,
    valor: Boolean,
    fecha: String,
    hora: String,
});

module.exports = mongoose.model('METRICS', metricas);