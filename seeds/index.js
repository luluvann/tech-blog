const seedUsers = require("./user-seeds");
const seedPosts = require("./post-seeds");

const sequelize = require("../config/connection");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log("--------------");
  const users = await seedUsers();
  const parsedUser = users[0].toJSON();

  await seedPosts();
  console.log('\n----- POSTS SEEDED -----\n');
  process.exit(0);
};

seedAll();
