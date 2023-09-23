const {request, response} = require('express');
const jwt = require('jsonwebtoken');
const {QueryTypes} = require('sequelize');
const conexion = require('../database/config');


const validarToken = async (req = request, res = response)=>{
    const {token} = req.body;
    if(!token){
        return res.status(401).json({
            msg:'No se especifico el token.'
        })
    }

    try{

        let {id} = jwt.verify(token,process.env.LLAVE);
        

    }
    catch(error){
        let {} = jwt.verify(token) 
    }
}

module.exports = {
    validarToken
}

