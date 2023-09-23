const {Sequelize} = require('sequelize');   

const database = new Sequelize(
    {
        database: process.env.DATABASE,
        username: process.env.USER,
        password: process.env.PASSWORD,
        host: process.env.HOST,

        logging: false,
        dialect:'mariadb',
    }
);






module.exports = database;