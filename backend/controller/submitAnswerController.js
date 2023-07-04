const userModel = require("../models/userModels");
const quizModel = require("../models/quizModel");

// @desc Submitting Answer for all Questions
// @route POST /api/users/questions/answers
// @access Private
const submitAnswer = async (req, res) => {
  const userId = req.body.userId;

  try {
    const user = await userModel.findById(userId).populate("quiz");

    if (!user)
      return res
        .status(404)
        .json({ success: false, message: "User not found" });

    // Accessing the quizzes associated with the user
    const quizzes = user.quiz;
    res.status(200).json({ success: true, message: quizzes });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ success: false, message: "Error retrieving Quizzes" });
  }
};

module.exports = submitAnswer;