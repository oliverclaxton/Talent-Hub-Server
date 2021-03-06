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

router.post("/images", async (req, res, next) => {
  try {
    const { imgUrl, userId, campaignId } = req.body;

    console.log("what is req.bodty?", req.body);

    const campaignImage = await CampaignImage.create({
      imageUrl: imgUrl,
      userId: userId,
      campaignId: campaignId,
    });

    return res
      .status(201)
      .send({ message: "campaign imgage created", campaignImage });
  } catch (e) {
    console.log("i am error", e.message);
    next();
  }
});

router.patch("/images", async (req, res, next) => {
  try {
    const { caption, id } = req.body;

    const idToFind = parseInt(id);

    console.log("what is req.bodty?", req.body);

    const campaignImage = await CampaignImage.findByPk(idToFind);

    await campaignImage.update({ caption });

    return res
      .status(201)
      .send({ message: "campaign imgage updated", campaignImage });
  } catch (e) {
    console.log("i am error", e.message);
    next();
  }
});

router.patch("/", async (req, res, next) => {
  try {
    const { statusId, campaignId } = req.body;

    const idToFind = parseInt(campaignId);
    const idToChange = parseInt(statusId);

    console.log("what is req.bodty?", req.body);

    const campaignStatus = await Campaign.findByPk(idToFind);

    await campaignStatus.update({ statusId: idToChange });

    return res
      .status(201)
      .send({ message: "campaign status updated", campaignStatus });
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

router.delete("/images", async (req, res, next) => {
  try {
    const { id } = req.body;
    console.log("req body is ", req.body, id);

    const toDelete = await CampaignImage.findByPk(id);

    if (!toDelete) {
      res.status(404).send("campaign image not found");
    } else {
      const deleted = await toDelete.destroy();
      res.json(deleted);
    }
  } catch (e) {
    next(e);
  }
});

router.delete("/:campaignId", async (req, res, next) => {
  try {
    const { campaignId } = req.params;
    console.log("params are", req.params);

    const toDelete = await Campaign.findByPk(campaignId);
    if (!toDelete) {
      res.status(404).send("campaign not found");
    } else {
      const deleted = await toDelete.destroy();
      res.json(deleted);
    }
  } catch (e) {
    next(e);
  }
});

module.exports = router;
