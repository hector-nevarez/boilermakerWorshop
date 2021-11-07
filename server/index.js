const port = process.env.PORT || 3000; // this can be very useful if you deploy to Heroku!
const seed = require('../seed');
// the app.js was used as the previous entry point 
const app = require('./app');
// say our sequelize instance is created in 'db.js'
const { db } = require('./db');

const init = async () => {
  try {
    if (process.env.SEED === true) {
      await seed();
    }
    else {
      // This will run .sync() only if database name ends with '_test'
      await db.sync(
        {
          force: true,
          // match: /_test$/,
        });
    }
    app.listen(port, function () {
      console.log("Knock, knock");
      console.log("Who's there?");
      console.log(`Your server, listening on port ${port}`);
    });

  } catch (error) {
    console.log(error);
  }
}

init();
