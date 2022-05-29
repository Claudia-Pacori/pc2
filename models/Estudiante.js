var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var EstudianteSchema = new Schema({
    codigo: {type: String, required: true, max: 9},
    nombre: {type: String, required: true, max: 50},
    apellido: {type: String, required: true, max: 50},
    email: {type: String, required: true, max: 20},
    estado: {type: String, required: true, max: 2}
});

module.exports = mongoose.model('Estudiante', EstudianteSchema);
