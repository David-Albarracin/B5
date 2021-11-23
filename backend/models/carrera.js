var mongoose=require('mongoose');
const Schema=mongoose.Schema;
const CarreraSchema=new Schema({
    nombre: String,
    escuela:String,
    universidad:String,
    duracion: Number
});

const Carrera = mongoose.model('carrera', CarreraSchema);
module.exports = Carrera;
