// const bcrypt = require("bcrypt");
const { Router } = require("express");
// const talentcampaign = require("../models/talentcampaign")
// const { toJWT } = require("../auth/jwt");
// const authMiddleware = require("../auth/middleware");
const User = require("../models/").user;
const Campaign = require("../models/").campaign;
const CampaignImage = require("../models").campaignImage;
const TalentCampaign = require("../models").talentCampaign;

const router = new Router();

router.post("/", async (req, res, next) => {
  try {
    const {
      title,
      description,
      contractLink,
      briefLink,
      date,
      talent,
    } = req.body;

    console.log("what is req.bodty?", req.body);

    if (!title || !description || !contractLink || !briefLink) {
      return res.status(400).send({
        message:
          "A campaign must have a title, decription, brief and a contract",
      });
    }

    const campaign = await Campaign.create({
      title,
      description,
      contractLink,
      briefLink,
      dueDate: date,
    });

    console.log("what is talent?", talent);
    const talentCampaign = await TalentCampaign.create({
      userId: talent,
      campaignId: campaign.id,
    });

    return res.status(201).send({ message: "campaign created", campaign });
  } catch (e) {
    console.log("i am error", e.message);
    next();
  }
});

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
