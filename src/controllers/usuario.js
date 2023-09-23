const {response, request} = require('express'); 
const Usuario = require('../models/Usuario');



const crear·usuario = async(req = request, res = response)=>{
    try{

        const {
            nombre,
            usuario,
            contraseña,
            correo,
            telefono,
            nacimiento,
        } = req.body;
        console.log('hola');
        const user = Usuario.build(
            {
                name:'Alejandro',
                user:'alexRamon',
                password:'contraseña',
                email:'alex@hotmail.com',
                telephone:'6442511134',
                birthday:'23/09/2023'
            }
        );

        await user.save();

        res.status(200).json({
            valor: true,
            estado: 200,
            mensaje: `Nuevo usuario registrado.`
        });
    }
    catch(error){
        console.log(err);
        res.status(400).json({
            msg:"Error al crear al usuario."
        });
    }
}

module.exports = {
    crear·usuario
}



