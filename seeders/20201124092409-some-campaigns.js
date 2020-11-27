"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "campaigns",
      [
        {
          title: "Daniel Wellington",
          description: "Promoting the latest watch",
          dueDate: new Date("2020-12-25"),
          briefLink: "somelink.somelink",
          contractLink: "somelink.somelink",
          statusId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Dorethy Perkins",
          description: "take photo of dress",
          dueDate: new Date("2020-12-15"),
          briefLink: "somelink.somelink",
          contractLink: "somelink.somelink",
          statusId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Hay",
          description: "take photo of chair",
          dueDate: new Date("2020-12-30"),
          briefLink: "somelink.somelink",
          contractLink: "somelink.somelink",
          statusId: 1,
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
