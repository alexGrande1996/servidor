const  express = require('express');
const {request,response} = require('express');
const session = require('express-session');
const cors = require('cors');

const  crypto = require('crypto');
const { Server } = require('socket.io');


class Sockets{

    constructor(){

        this.app = express();
        this.port = process.env.PORT || 3000;
        this.server = require('http').createServer(this.app);

        const io = new Server(this.server,{
            cors:{
                origin:'*',
                methods: ["GET", "POST","UPDATE","DELETE"]
            }
        });

        io.on('connection',(socket)=>{
            console.log('hola');

            
            socket.on('mensaje',(data)=>{
                console.log(data);
            });
            socket.emit('mensaje','Hola cliente');

        });


        // this.io = require('socket.io')(this.server);

        //conectar con la base de datos

        
        //Herramientras de ayuda
        this.middlewares();


        //socket

        //rutas
        this.routes();

    }
    
    middlewares(){
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.static('public'));
       
    }

    listen(){
        this.server.listen(this.port,()=>{
            console.log("Servidor corriendo en el puerto",this.port);
        });
    }

 
    
    routes(){
      
        
    }


}

module.exports = Sockets;
