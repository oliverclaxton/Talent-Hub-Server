// const bcrypt = require("bcrypt");
const { Router } = require("express");
// const { toJWT } = require("../auth/jwt");
// const authMiddleware = require("../auth/middleware");
const User = require("../models/").user;
const Campaign = require("../models/").campaign;
const router = new Router();

router.get("/", async (req, res, next) => {
  try {
    const allTalents = await User.findAll({
      where: { isTalent: true },
      include: [Campaign],
    });

    res.status(200).send(allTalents);
  } catch (e) {
    console.log("i am error message", e.message);
    next();
  }
});

router.get("/:talentId", async (req, res, next) => {
  try {
    const { talentId } = req.params;

    console.log("what is req.params", req.params);

    if (isNaN(parseInt(talentId))) {
      return res.status(400).send({ message: "talent id is not a number" });
    }
    const singleTalent = await User.findByPk(talentId, {
      include: [Campaign],
    });

    res.status(200).send(singleTalent);
  } catch (e) {
    console.log("i am error message", e.message);
    next();
  }
});

module.exports = router;
