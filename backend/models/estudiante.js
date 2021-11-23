var mongoose=require('mongoose');
const Schema=mongoose.Schema;
const estudianteSchema=new Schema({
    nombre: String,
    cedula: Number
});

const estudiante = mongoose.model('estudiante', estudianteSchema);
module.exports = estudiante;
