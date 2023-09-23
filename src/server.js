const  express = require('express');
const cors = require('cors');

const { Server } = require('socket.io');
const database = require('./database/config');


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
        this.basedatos();

        
        //Herramientras de ayuda
        this.middlewares();


        //socket

        //rutas
        this.routes();


        //database

    }
    
    middlewares(){
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.static('public'));
       
    }

    listen(){
        this.server.listen(this.port,()=>{
            console.log(`Servidor corriendo en el puerto: ${this.port}.`);
        });
    }

 
    
    routes(){
        this.app.use('/usuario',require('./routes/usuario'));
    }


    async basedatos(){
        try{
            await database.authenticate();
            console.log('Base de datos conectada.');
            
            await database.sync({force:true});
            console.log('Base de datos actualizada.');
        }
        catch(error){
            console.log(error);
            console.log('No se logro conectar con la base de datos.');
        }
    }


}

module.exports = Sockets;
