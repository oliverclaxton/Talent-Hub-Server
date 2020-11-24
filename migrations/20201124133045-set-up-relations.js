"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("campaignImages", "campaignId", {
      type: Sequelize.INTEGER,
      references: {
        model: "campaigns",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
    await queryInterface.addColumn("campaignImages", "userId", {
      type: Sequelize.INTEGER,
      references: {
        model: "users",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
    await queryInterface.addColumn("talentCampaigns", "userId", {
      type: Sequelize.INTEGER,
      references: {
        model: "users",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
    await queryInterface.addColumn("talentCampaigns", "campaignId", {
      type: Sequelize.INTEGER,
      references: {
        model: "campaigns",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
    await queryInterface.addColumn("campaigns", "statusId", {
      type: Sequelize.INTEGER,
      references: {
        model: "statuses",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("campaignImages", "campaignId");
    await queryInterface.removeColumn("campaignImages", "userId");
    await queryInterface.removeColumn("talentCampaigns", "userId");
    await queryInterface.removeColumn("talentCampaigns", "campaignId");
    await queryInterface.removeColumn("campaigns", "statusId");
  },
};
