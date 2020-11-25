"use strict";
const { Model } = require("sequelize");
const talentcampaign = require("./talentcampaign");
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      user.belongsToMany(models.campaign, {
        through: "talentCampaigns",
        foreignKey: "userId",
      });
      user.hasMany(models.campaignImage);
    }
  }
  user.init(
    {
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      profileImageUrl: DataTypes.STRING,

      isAdmin: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      isTalent: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
    },
    {
      sequelize,
      modelName: "user",
    }
  );
  return user;
};
