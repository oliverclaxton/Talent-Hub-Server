"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class campaign extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      campaign.hasMany(models.campaignImage);
      campaign.belongsToMany(models.user, {
        through: "talentCampaigns",
        foreignKey: "campaignId",
      });
      campaign.belongsTo(models.status);
    }
  }
  campaign.init(
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      dueDate: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },

      briefLink: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      contractLink: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      statusId: { type: DataTypes.STRING, defaultValue: 3 },
    },
    {
      sequelize,
      modelName: "campaign",
    }
  );
  return campaign;
};
