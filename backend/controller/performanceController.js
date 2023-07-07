const { userModel } = require("../models/userModels");

// @desc Get Performance Records and Statistics
// @route GET /api/users/performance/:useId
// @access Private
const performance = async (req, res) => {
  const { userId } = req.params;

  try {
    const user = await userModel.findById(userId).populate("quizzes.quizId");

    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User Not Found" });
    }

    // Process user's performance data and calculate performance metrics for each topic
    const performanceData = user.quizzes.map((quiz) => {
      const topic = quiz.quizId.topic;
      const totalAttempts = quiz.quizId.questions.length;
      const correctAttempts = quiz.score;
      const accuracy = (correctAttempts / totalAttempts) * 100;

      return {
        topic,
        totalAttempts,
        correctAttempts,
        accuracy,
      };
    });

    res.status(200).json({ success: true, performanceData });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ success: false, message: "Error retrieving performance data" });
  }
};

module.exports = performance;
