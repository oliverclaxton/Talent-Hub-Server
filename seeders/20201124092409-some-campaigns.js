"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "campaigns",
      [
        {
          title: "DW",
          description: "take photo of watch",
          dueDate: new Date("25-12-2020"),
          breifLink: "somelink.somelink",
          contractLink: "somelink.somelink",
          status: "complete",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "DP",
          description: "take photo of dress",
          dueDate: new Date("15-12-2020"),
          breifLink: "somelink.somelink",
          contractLink: "somelink.somelink",
          status: "in progress",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Hay",
          description: "take photo of chair",
          dueDate: new Date("30-12-2020"),
          breifLink: "somelink.somelink",
          contractLink: "somelink.somelink",
          status: "incomplete",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("campaigns", null, {});
  },
};
