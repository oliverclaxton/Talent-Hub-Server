"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "campaignImages",
      [
        {
          imageUrl:
            "http://res.cloudinary.com/drzludyk5/image/upload/v1606811074/qpcpl663jfvrzj3bwmqd.jpg",
          caption:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam enim vitae praesentium accusamus dicta deleniti tempore totam dolorum veritatis eius?",
          campaignId: 1,
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          imageUrl:
            "http://res.cloudinary.com/drzludyk5/image/upload/v1606811090/t3bz9unbhvhkyzfjapxh.jpg",
          caption:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam enim vitae praesentium accusamus dicta deleniti tempore totam dolorum veritatis eius?",
          campaignId: 1,
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          imageUrl:
            "http://res.cloudinary.com/drzludyk5/image/upload/v1606811200/ijwexlv6lvftc6ykw6mo.jpg",
          caption:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam enim vitae praesentium accusamus dicta deleniti tempore totam dolorum veritatis eius?",
          campaignId: 1,
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          imageUrl:
            "http://res.cloudinary.com/drzludyk5/image/upload/v1606811218/mgbmgbaxm7kp28qum3tw.jpg",
          caption:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam enim vitae praesentium accusamus dicta deleniti tempore totam dolorum veritatis eius?",
          campaignId: 1,
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          imageUrl:
            "http://res.cloudinary.com/drzludyk5/image/upload/v1606811394/eerymqephjomhvdhc2uy.jpg",
          caption:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam enim vitae praesentium accusamus dicta deleniti tempore totam dolorum veritatis eius?",
          campaignId: 1,
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          imageUrl:
            "http://res.cloudinary.com/drzludyk5/image/upload/v1606811416/phgxsxtqnsxavf3eghvm.jpg",
          caption:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam enim vitae praesentium accusamus dicta deleniti tempore totam dolorum veritatis eius?",
          campaignId: 1,
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          imageUrl:
            "http://res.cloudinary.com/drzludyk5/image/upload/v1606466896/lj0vwret3ahylectfpnj.jpg",
          caption:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam enim vitae praesentium accusamus dicta deleniti tempore totam dolorum veritatis eius?",
          campaignId: 2,
          userId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          imageUrl:
            "http://res.cloudinary.com/drzludyk5/image/upload/v1606466896/lj0vwret3ahylectfpnj.jpg",
          caption:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam enim vitae praesentium accusamus dicta deleniti tempore totam dolorum veritatis eius?",
          campaignId: 2,
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          imageUrl:
            "http://res.cloudinary.com/drzludyk5/image/upload/v1606466896/lj0vwret3ahylectfpnj.jpg",
          caption:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam enim vitae praesentium accusamus dicta deleniti tempore totam dolorum veritatis eius?",
          campaignId: 3,
          userId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          imageUrl:
            "http://res.cloudinary.com/drzludyk5/image/upload/v1606466896/lj0vwret3ahylectfpnj.jpg",
          caption:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam enim vitae praesentium accusamus dicta deleniti tempore totam dolorum veritatis eius?",
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
