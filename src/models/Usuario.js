const {DataTypes} = require('sequelize');
const database = require('../database/config');

const Usuario = database.define('Users',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    user:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true,
        validate:{
            isEmail:true
        }
    },
    telephone:{
        type:DataTypes.STRING,
        allowNull:false
    },

    birthday:{
        type:DataTypes.STRING,
        allowNull:false
    },
    visibility:{
        type:DataTypes.BOOLEAN,
        allowNull:false,
        defaultValue:true
    },


},{timestamps:true});



module.exports = Usuario;