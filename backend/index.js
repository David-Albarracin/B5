var app = require('./app');
var mongoose = require('./src/conexBD/conn');
var port = 4000;
const cors = require('cors');

app.use(cors())
app.listen(port, () =>{
console.log("servidor corriendo ok")
});