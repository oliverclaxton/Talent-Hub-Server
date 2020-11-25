const { user, campaign, talentCampaign, status } = require("./models");

async function campaignWithUsers() {
  try {
    const campaigns = await campaign.findAll({
      include: [user],
    });

    return campaigns.map((c) => c.get({ plain: true }));
  } catch (e) {
    console.log("i am error message!!!!", e);
  }
}

async function singleCampaignWithUsers(key) {
  try {
    const campaigns = await campaign.findByPk(key, {
      include: user,
    });

    return campaigns ? campaigns.get({ plain: true }) : "Not found!";
  } catch (e) {
    console.log("i am error message!!!!", e);
  }
}

async function allUserWithCampaigns() {
  try {
    const users = await user.findAll({ include: [campaign] });
    return users.map((u) => u.get({ plain: true }));
  } catch (e) {
    console.log("i am error message", e);
  }
}

async function singleUserWithCampaigns(key) {
  try {
    const users = await user.findByPk(key, {
      include: campaign,
    });

    return users ? users.get({ plain: true }) : "Not found!";
  } catch (e) {
    console.log("i am error message!!!!", e);
  }
}

allUserWithCampaigns().then((u) => console.log("i am users", u));

singleCampaignWithUsers(2).then((result) =>
  console.log("i am campaign", result)
);

campaignWithUsers().then((c) => console.log("i am ccc", c[0]));

singleUserWithCampaigns(2).then((result) => console.log("i am result", result));
