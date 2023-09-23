const {DataTypes} = require('sequelize');
const database = require('../database/config');


const Token = database.define('Tokens',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
    },
    user_id:{
        type:DataTypes.INTEGER,
        allowNull:false,
    },
    token:{
        type:DataTypes.STRING(64),
        allowNull:false,
    }
},{timestamps:true});