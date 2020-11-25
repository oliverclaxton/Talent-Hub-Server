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
          lastName: "A",
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
          firstName: "Talent1",
          lastName: "T1",
          email: "talent1@talent.com",
          password: bcrypt.hashSync("talent1", SALT_ROUNDS),
          isAdmin: false,
          isTalent: true,
          profileImageUrl:
            "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHw%3D&auto=format&fit=crop&w=800&q=60",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Talent2",
          lastName: "T2",
          email: "talent2@talent.com",
          password: bcrypt.hashSync("talent2", SALT_ROUNDS),
          isAdmin: false,
          isTalent: true,
          profileImageUrl: "some url",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Talent3",
          lastName: "T3",
          email: "talent3@talent.com",
          password: bcrypt.hashSync("talent3", SALT_ROUNDS),
          isAdmin: false,
          isTalent: true,
          profileImageUrl: "some url",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Talent4",
          lastName: "T4",
          email: "talent4@talent.com",
          password: bcrypt.hashSync("talent4", SALT_ROUNDS),
          isAdmin: false,
          isTalent: true,
          profileImageUrl: "some url",
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
