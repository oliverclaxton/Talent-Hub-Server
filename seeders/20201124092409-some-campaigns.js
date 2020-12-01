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
          briefLink:
            "https://docs.google.com/presentation/d/1mOrY-eN7KXpAmtZvVR_rC2wFdL6z6qPQHHlUHVjMxA8/edit?usp=sharing",
          contractLink:
            "https://docs.google.com/document/d/1VS55_0e9CBOTBsp7P2j0JauA99xbQxkFuaibTeOIfwk/edit?usp=sharing",
          statusId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Frame Denim",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam praesentium dolores blanditiis distinctio odit unde, id ipsam sapiente tempore vero.",
          dueDate: new Date("2020-12-15"),
          briefLink:
            "https://docs.google.com/presentation/d/1mOrY-eN7KXpAmtZvVR_rC2wFdL6z6qPQHHlUHVjMxA8/edit?usp=sharing",
          contractLink:
            "https://docs.google.com/document/d/1VS55_0e9CBOTBsp7P2j0JauA99xbQxkFuaibTeOIfwk/edit?usp=sharing",
          statusId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Hay",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam praesentium dolores blanditiis distinctio odit unde, id ipsam sapiente tempore vero.",
          dueDate: new Date("2020-12-30"),
          briefLink:
            "https://docs.google.com/presentation/d/1mOrY-eN7KXpAmtZvVR_rC2wFdL6z6qPQHHlUHVjMxA8/edit?usp=sharing",
          contractLink:
            "https://docs.google.com/document/d/1VS55_0e9CBOTBsp7P2j0JauA99xbQxkFuaibTeOIfwk/edit?usp=sharing",
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
