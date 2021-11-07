const {db, modules: {User}}= require('./server/db/index');


async function seed(){
    await db.sync({force: true}); // clears the db and matched models to tables
    console.log('db synced!');
    
    // Creating users
    const users= await Promise.all([
        User.create({username:'cody', password: '123'}),
        User.create({username: 'murphy', password: '1234'})
    ]);
    console.log(`seeded ${users.length} users`);
    console.log('seeded succesfully');

    return {
        users:{
            cody: users[0],
            murphy: users[1]
        }
    }
}