const {response, request} = require('express'); 
const Usuario = require('../models/Usuario');
const e = require('express');



const crear·usuario = async(req = request, res = response)=>{
    try{
        //Parametros 
        const {
            nombre,
            usuario,
            contraseña,
            correo,
            telefono,
            nacimiento,
        } = req.body;


        //Peticion para registrar un usuario
        const user = Usuario.build(
            {
                name:'Alejandro',
                user:'alex2Ramon',
                password:'contraseña',
                email:'alex@hotmail.com',
                telephone:'6442511134',
                birthday:'23/09/2023'
            }
        );

        const valor = await user.save();
        if(valor){
            res.status(200).json({valor: true,estado: 200,mensaje: `Nuevo usuario registrado.`});
        }else{

            res.status(200).json({valor: false,estado: 200,mensaje: `No se logro registrar el usuario.`});
        }

    }
    catch(error){
        console.log(err);
        res.status(400).json({
            msg:"Error al crear al usuario."
        });
    }
}


const actualizar·usuario = ()=>{
    try{
        //Parametros 
        const {columna:} = req.body;


        const user = Usuario.update();


        
        res.status(200).json({
            valor: true,
            estado: 200,
            mensaje: `Nuevo usuario registrado.`
        });
    }
    catch(error){
        console.log(err);
        res.status(400).json({
            msg:"Error al actualizar al usuario."
        }); 
    }
}

module.exports = {
    crear·usuario
}



