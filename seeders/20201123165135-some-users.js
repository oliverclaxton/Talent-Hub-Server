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
            "http://res.cloudinary.com/drzludyk5/image/upload/v1606747000/wtk4ybax2j5ygwpaytvu.jpg",
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
            "http://res.cloudinary.com/drzludyk5/image/upload/v1606747696/tjuo5rqcxtbyzu0h3ouh.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Nimi",
          lastName: "Blackwell",
          email: "nimi@talent.com",
          password: bcrypt.hashSync("nimi", SALT_ROUNDS),
          isAdmin: false,
          isTalent: true,
          profileImageUrl:
            "http://res.cloudinary.com/drzludyk5/image/upload/v1606747303/uieyk981yi32rj4aotpw.jpg",
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
            "http://res.cloudinary.com/drzludyk5/image/upload/v1606747027/jj71yany7v97ht8qhhhl.jpg",
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
            "http://res.cloudinary.com/drzludyk5/image/upload/v1606747114/zbmh38jn82nwj9qlsdxq.jpg",
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
            "http://res.cloudinary.com/drzludyk5/image/upload/v1606747143/ykyjjwlyxousytghxl9g.jpg",
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
