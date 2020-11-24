"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "statuses",
      [
        {
          title: "Complete",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "In Progress",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Incomplete",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("statuses", null, {});
  },
};
