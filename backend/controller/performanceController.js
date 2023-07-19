const { userModel } = require("../models/userModels");
const quizModel = require("../models/quizModel");
const quizResultModel = require("../models/quizResultModel");

// @desc Get Performance Records and Statistics
// @route GET /api/users/performance/:userId
// @access Private
// @desc Get Performance Records and Statistics
// @route GET /api/users/performance/:userId
// @access Private
const performance = async (req, res) => {
  const { userId } = req.params;

  try {
    const user = await userModel.findById(userId).populate({
      path: "quizzes.quizId",
      model: quizModel,
      select: "topic desktopImage questions",
    });

    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User Not Found" });
    }

    // Get all quiz results for the user
    const quizResults = await quizResultModel
      .find({ userId: user._id })
      .populate("quizId");
    console.log("quizResults:::", quizResults);

    // Calculate the performance record percentage for each topic
    const performanceData = quizResults.map((quizResult) => {
      const quiz = quizResult.quizId;
      const topic = quiz.topic;
      console.log("topic", topic);

      const score = quizResult.score;
      const noQuestions = quiz.questions.length;
      const pointsPerQuestion = 10; // Assuming each question is worth 10 points

      // Calculate the accuracy for the topic
      const accuracy =
        ((score / (noQuestions * pointsPerQuestion)) * 100).toFixed(1) + "%";

      console.log("accuracy::", accuracy);

      return {
        topic,
        score,
        accuracy,
      };
    });

    // Sort performanceData in descending order based on score
    performanceData.sort((a, b) => b.score - a.score);

    res.status(200).json({ success: true, performanceData });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ success: false, message: "Error Retrieving Performance Data" });
  }
};

module.exports = performance;