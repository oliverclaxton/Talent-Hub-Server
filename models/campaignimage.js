"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class campaignImage extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      campaignImage.belongsTo(models.campaign);
      campaignImage.belongsTo(models.user);
    }
  }
  campaignImage.init(
    {
      imageUrl: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      caption: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "campaignImage",
    }
  );
  return campaignImage;
};
