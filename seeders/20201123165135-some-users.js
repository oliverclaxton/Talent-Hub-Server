"use strict";
const bcrypt = require("bcrypt");
const { SALT_ROUNDS } = require("../config/constants");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          firstName: "Admin",
          lastName: "Administrator",
          email: "admin@admin.com",
          password: bcrypt.hashSync("admin", SALT_ROUNDS),
          isAdmin: true,
          isTalent: false,
          profileImageUrl:
            "https://images.unsplash.com/photo-1536164261511-3a17e671d380?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTV8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8&auto=format&fit=crop&w=800&q=60",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Naomi",
          lastName: "Ross",
          email: "naomi@talent.com",
          password: bcrypt.hashSync("naomi", SALT_ROUNDS),
          isAdmin: false,
          isTalent: true,
          profileImageUrl:
            "https://i.ytimg.com/vi/o1Y81KHx8ZQ/maxresdefault.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Katie",
          lastName: "Peake",
          email: "katie@talent.com",
          password: bcrypt.hashSync("katie", SALT_ROUNDS),
          isAdmin: false,
          isTalent: true,
          profileImageUrl:
            "https://pbs.twimg.com/profile_images/1089971114284064768/5StTW47r_400x400.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Charlotte",
          lastName: "Olivia",
          email: "charlottle@talent.com",
          password: bcrypt.hashSync("charlotte", SALT_ROUNDS),
          isAdmin: false,
          isTalent: true,
          profileImageUrl:
            "https://cdn.21buttons.com/users/7807b06b3a8042aabd3e3f6b03d5da47.large.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Nina",
          lastName: "Caine",
          email: "nina@talent.com",
          password: bcrypt.hashSync("nina", SALT_ROUNDS),
          isAdmin: false,
          isTalent: true,
          profileImageUrl:
            "https://static1.squarespace.com/static/5e7a512b0ccef5071eeb0c8c/5e7a51a7b8ae72565edb086b/5e7a51a7b8ae72565edb08b6/1586944174717/NINA+POST+1.jpeg?format=1500w",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Maria",
          lastName: "Joynson",
          email: "maria@talent.com",
          password: bcrypt.hashSync("maria", SALT_ROUNDS),
          isAdmin: false,
          isTalent: true,
          profileImageUrl:
            "https://cdn.21buttons.com/posts/640x800/df411c88385d4293a207f1723e05d7c6_1080x1350.jpg",
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
