console.clear();
//Limpiamos la consolaclear
//Importamos los moduloss
require('dotenv').config();
const Sockets = require('./src/server');

//Iniciamos el servidor
const server = new Sockets();
server.listen();

