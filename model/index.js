const mongoose = require("mongoose");
const schema = {
  topicNumber: {
    type: Number,
    required: "Enter topic number",
  },
  head: {
    type: String,
    required: "Enter topic number",
    unique: true,
  },
  options: {
    type: [String],
    required: "Enter 4 options",
  },
  answer: {
    type: Number,
    required: "Enter answer",
    min: 0,
    max: 3,
  },
};
const Schema = new mongoose.Schema(schema);

module.exports = mongoose.model("MCQ", Schema);
