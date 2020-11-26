// const bcrypt = require("bcrypt");
const { Router } = require("express");
// const { toJWT } = require("../auth/jwt");
// const authMiddleware = require("../auth/middleware");
const User = require("../models/").user;
const Campaign = require("../models/").campaign;
const CampaignImage = require("../models").campaignImage;

const router = new Router();

router.get("/", async (req, res, next) => {
  try {
    const allCampaigns = await Campaign.findAll({
      include: [User],
    });

    res.status(200).send(allCampaigns);
  } catch (e) {
    console.log("i am error message", e.message);
    next();
  }
});

router.get("/:campaignId", async (req, res, next) => {
  try {
    const { campaignId } = req.params;

    console.log("what is req.params", req.params);

    if (isNaN(parseInt(campaignId))) {
      return res.status(400).send({ message: "campaign id is not a number" });
    }
    const singleCampaign = await Campaign.findByPk(campaignId, {
      include: [User, CampaignImage],
    });

    res.status(200).send(singleCampaign);
  } catch (e) {
    console.log("i am error message", e.message);
    next();
  }
});

module.exports = router;
