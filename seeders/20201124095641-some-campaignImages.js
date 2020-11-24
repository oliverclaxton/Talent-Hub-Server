"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "campaignImages",
      [
        {
          imageUrl: "C1 image URL1",
          caption: "here is a image of me infront of nothing ",
          campaignId: 1,
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          imageUrl: "C1 image URL2",
          caption: "here is a image of me infront of nothing ",
          campaignId: 1,
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          imageUrl: "C2 image URL1",
          caption: "here is a image of me infront of nothing ",
          campaignId: 2,
          userId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          imageUrl: "C2 image URL2",
          caption: "here is a image of me infront of nothing ",
          campaignId: 2,
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          imageUrl: "C3 image URL2",
          caption: "here is a image of me infront of nothing ",
          campaignId: 3,
          userId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          imageUrl: "C3 image URL3",
          caption: "here is a image of me infront of nothing ",
          campaignId: 3,
          userId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("campaignImages", null, {});
  },
};
