const { Router } = require('express');
const router = Router();

// export default routers
var controllerCarrera=require('../controllers/controllerCarrera');


router.get('/prueba', controllerCarrera.prueba);

router.post('/crear',controllerCarrera.saveCarrera);
router.get('/buscar/:id',controllerCarrera.buscarData);
router.get('/buscar/:id?',controllerCarrera.listarAllData);
router.delete('/eliminar/:id',controllerCarrera.deleteCarrera);
router.put('/actualizar/:id',controllerCarrera.updateCarrera);




module.exports = router;

