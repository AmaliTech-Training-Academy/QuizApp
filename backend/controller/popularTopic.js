const quizModel = require("../models/quizModel");


// @desc Get Quiz Results for a User and Quiz
// @route GET /api/users/popular-topics
// @access Private
async function fetchPopularTopics(req, res) {
  try {
    const popularTopics = await quizModel
      .find()
      .sort({ popularity: -1 })
      .limit(5)
      .select('desktopImage topic _id popularity');
    res.status(200).json({ success: true, popularTopics });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Failed to Fetch Popular Topics" });
  }
}

module.exports = fetchPopularTopics;
