const MCQ = require("../model");
const getMcqs = async (req, res) => {
  try {
    let data = await MCQ.find({
      topicNumber: {
        $in: [11, 13, 14, 15, 16],
      },
    });
    res.status(200).json({ data });
  } catch (error) {
    res.status(400).json(error.message);
  }
};
const getEmpty = async (req, res) => {
  try {
    res.status(200).json({ data: [] });
  } catch (error) {
    res.status(400).json(error.message);
  }
};
const getError = async (req, res) => {
  try {
    throw new Error("You have error");
  } catch (error) {
    res.status(400).json(error.message);
  }
};

module.exports = {
  getMcqs,
  getEmpty,
  getError,
};
