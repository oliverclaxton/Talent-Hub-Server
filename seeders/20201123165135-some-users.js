"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          firstName: "Admin",
          lastName: "A",
          email: "admin@admin.com",
          password: bcrypt.hashSync("admin", SALT_ROUNDS),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Talent1",
          lastName: "T1",
          email: "talent1@talent.com",
          password: bcrypt.hashSync("talent1", SALT_ROUNDS),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Talent2",
          lastName: "T2",
          email: "talent2@talent.com",
          password: bcrypt.hashSync("talent2", SALT_ROUNDS),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("users", null, {});
  },
};
