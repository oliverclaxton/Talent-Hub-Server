"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "campaigns",
      [
        {
          title: "Aesop",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam praesentium dolores blanditiis distinctio odit unde, id ipsam sapiente tempore vero.",
          dueDate: new Date("2020-12-25"),
          briefLink: "somelink.somelink",
          contractLink: "somelink.somelink",
          statusId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Frame Denim",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam praesentium dolores blanditiis distinctio odit unde, id ipsam sapiente tempore vero.",
          dueDate: new Date("2020-12-15"),
          briefLink: "somelink.somelink",
          contractLink: "somelink.somelink",
          statusId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Hay",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam praesentium dolores blanditiis distinctio odit unde, id ipsam sapiente tempore vero.",
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
