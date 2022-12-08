const express = require("express");
const LearningItem = require("../models/learningItem");
const requireAuth = require("../middlewares/requireAuth");

const router = express.Router();

router.get("/", requireAuth, async (req, res) => {
  const learningItems = await LearningItem.find({ user: req.userId });
  res.send(learningItems);
});

router.get("/:id", requireAuth, async (req, res) => {
  const learningItem = await LearningItem.findOne({
    _id: req.params.id,
    user: req.userId,
  });
  res.send(learningItem);
});

module.exports = router;
