var app = require('./app');
var mongoose = require('./src/conexBD/conn');
var port = 4000;
app.listen(port, () =>{
console.log("servidor corriendo ok")
});