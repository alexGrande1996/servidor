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
            console.log(`Usuario conectado: ${socket.id}`);

            

                        
            // Unirse a una habitación
            socket.on('joinRoom', (room) => {
                socket.join(room);
                console.log(`Usuario ${socket.id} se unió a la habitación ${room}`);
            });

            // Enviar un mensaje a una habitación
            socket.on('sendMessage', (room, message) => {
                io.to(room).emit('message', message);
            });


            socket.on('enviarMensaje',(mensaje,usuario,canal,hora)=>{
                io.to(canal).emit('mensaje',usuario,mensaje,hora);
            });



            console.log(io.of('/').sockets.size);
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
