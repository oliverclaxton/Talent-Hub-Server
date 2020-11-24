"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class talentCampaign extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      talentCampaign.belongsTo(models.user);
      talentCampaign.belongsTo(models.campaign);
    }
  }
  talentCampaign.init(
    {},
    {
      sequelize,
      modelName: "talentCampaign",
    }
  );
  return talentCampaign;
};
