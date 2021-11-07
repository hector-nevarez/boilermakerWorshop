// This is where all the database is gathered. The database file is required 
// (place where we actually create an instance of sequelize), as well as, the models

const db = require('./db');
const {User}= require('./models/User');

// associations go in here:


module.exports={
    db,
    models: {
        User,
    }
}
