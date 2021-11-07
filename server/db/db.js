const Sequelize = require('sequelize');
const pkg = require('../../package.json');

const databaseName = pkg.name;

const db = new Sequelize(
    process.env.DATABASE_URL || `postgres://localhost:5432/${databaseName}`, {
    logging: false, 
    // There are many other options to play with 
});

module.exports = db;
