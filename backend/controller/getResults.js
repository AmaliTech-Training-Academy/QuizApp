const QuizResult = require("../models/quizResultModel");
const quizModel = require("../models/quizModel");
const { userModel } = require("../models/userModels");

// @desc Get Quiz Results for a User and Quiz
// @route GET /api/users/:userId/quizzes/:quizId/results
// @access Private
const getQuizResults = async (req, res) => {
  const { userId, quizId } = req.params;

  try {
    const quizResult = await QuizResult.findOne({
      userId: userId,
      quizId: quizId, // quizResultId
    }).populate("quizId");
    if (!quizResult)
      return res
        .status(404)
        .json({ success: false, message: "Quiz Result Not Found" });

    const { _id, score, results } = quizResult;
    const quiz = quizResult.quizId;
    console.log("quiz results:", quizResult.results);

    const updatedResults = quizResult.results.map((result) => {
      return {
        resultId: _id,
        questionNumber: result.questionNumber,
        question: result.question,
        answers: result.answers,
      };
    });

    res.status(200).json({
      success: true,
      score,
      results: updatedResults,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Something Went Wrong" });
  }
};

module.exports = getQuizResults;
