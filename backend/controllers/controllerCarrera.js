var mongoose=require("../src/conexBD/conn");
var Carrera=require("../models/carrera");

function prueba(req,res){
    res.status(200).send({
    message: 'probando una acción............'
    });
    }

function saveCarrera(req,res){
    var miCarrera= new Carrera(req.body);
    miCarrera.save((err,result)=>{
    res.status(200).send({message:result});
    });
    }

function buscarData(req,res){
    var idCarrera=req.params.id;
    Carrera.findById(idCarrera).exec((err,result)=>{
    if(err){
        res.status(500).send({message:'Error al momento de ejecutar la solicitud'});
    }else{
        if(!result){
            res.status(404).send({message:'El registro a buscar no se encuentra disponible'});
        }else{
            res.status(200).send({result});
            }
        }
    });
    }

function listarAllData(req,res){
    var idCarrera=req.params.id;
    if(!idCarrera){
        var result=Carrera.find({}).sort('nombre');
    }else{
        var result=Carrera.find({_id:idCarrera});
    }
    result.exec(function(err,result){
    if(err){
        res.status(500).send({message:'Error al momento de ejecutar la solicitud...'});
    }else{
        if(!result){
            res.status(404).send({message:'El registro a buscar no se encuentra disponible'});
        }else{
        res.status(200).send({result});
            }
        }
    })
    }

function updateCarrera(req,res){
    var id = mongoose.Types.ObjectId(req.query.id);
    Carrera.findOneAndUpdate(id, req.body, function(err, Carrera) {
    if (err){
        res.send(err);
        res.status(404).send({message:'Error ID no encontrada'});
    }  
    else{
        res.json(Carrera);
    }
        });
};

function deleteCarrera(req,res){
    var idCarrera=req.params.id;
    Carrera.findByIdAndRemove(idCarrera, function(err, carrera){
        if(err) {
            return res.json(500, {
            message: 'No hemos encontrado la carrera'
            })
        }else{
            if(!carrera){
                res.status(404).send({message:'El registro a buscar no se encuentra disponible'});
            }else{
                res.status(200).send({message:'El registro se elimino'});
                }
            }
    });
}

module.exports={
    prueba, 
    saveCarrera, 
    buscarData, 
    listarAllData, 
    updateCarrera, 
    deleteCarrera
}
