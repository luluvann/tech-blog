const seedUsers = require("./user-seeds");

const sequelize = require("../config/connection");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log("--------------");
  const users = await seedUsers();
  const parsedUser = users[0].toJSON();

  process.exit(0);
};

seedAll();
