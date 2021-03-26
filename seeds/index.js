const seedUsers = require('./seedUser');
const seedPosts = require('./seedPost');
// const seedComments = require('./comment-seeds');

const sequelize = require('../config/connection');

const seedAll = async() => {
    await sequelize.sync({ force: true });
    await seedUsers();
    await seedPosts();
    process.exit(0);
};

seedAll();