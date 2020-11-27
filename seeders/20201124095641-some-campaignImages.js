"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "campaignImages",
      [
        {
          imageUrl:
            "http://res.cloudinary.com/drzludyk5/image/upload/v1606466896/lj0vwret3ahylectfpnj.jpg",
          caption: "here is a image of me infront of nothing ",
          campaignId: 1,
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          imageUrl:
            "http://res.cloudinary.com/drzludyk5/image/upload/v1606466896/lj0vwret3ahylectfpnj.jpg",
          caption: "here is a image of me infront of nothing ",
          campaignId: 1,
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          imageUrl:
            "http://res.cloudinary.com/drzludyk5/image/upload/v1606466896/lj0vwret3ahylectfpnj.jpg",
          caption: "here is a image of me infront of nothing ",
          campaignId: 2,
          userId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          imageUrl:
            "http://res.cloudinary.com/drzludyk5/image/upload/v1606466896/lj0vwret3ahylectfpnj.jpg",
          caption: "here is a image of me infront of nothing ",
          campaignId: 2,
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          imageUrl:
            "http://res.cloudinary.com/drzludyk5/image/upload/v1606466896/lj0vwret3ahylectfpnj.jpg",
          caption: "here is a image of me infront of nothing ",
          campaignId: 3,
          userId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          imageUrl:
            "http://res.cloudinary.com/drzludyk5/image/upload/v1606466896/lj0vwret3ahylectfpnj.jpg",
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
