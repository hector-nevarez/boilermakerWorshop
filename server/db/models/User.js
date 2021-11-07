const db = require('../db');
const Sequelize = require('sequelize');

const User = db.define('User', {
    username: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        validate: {
            notEmpty: true,
        }
    },
    password:{
        type: Sequelize.STRING,
    }
});

module.exports= User;