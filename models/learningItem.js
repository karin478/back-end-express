const mongoose = require("mongoose");

const learningItemSchema = new mongoose.Schema({
  text: String,
  user: String,
});

module.exports = mongoose.model("LearningItem", learningItemSchema);
