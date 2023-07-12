const { userModel } = require("../models/userModels");
const quizModel = require("../models/quizModel");
// const { errorHandler } = require("../middleware/errorHandler");

// @desc Get Quiz Results for a User and Topic
// @route GET /api/users/:userId/quizzes/:quizId/results
// @access Private
const getQuizResults = async (req, res) => {
  const { userId, quizId } = req.params;

  try {
    const user = await userModel.findById(userId).populate("quizzes.quizId");
    const quiz = await quizModel.findById(quizId);
    if (!user || !quiz)
      return res
        .status(404)
        .json({ success: false, message: "User or Quiz Not Found" });

    const quizResult = user.quizzes.find(
      (item) => item.quizId.toString() === quizId
    );

    if (!quizResult)
      return res
        .status(404)
        .json({ success: false, message: "Quiz Result Not Found" });

    const { score, answers } = quizResult;

    const results = answers.map((result) => {
      const questionIndex = result.questionNumber - 1;
      const question = quiz.questions[questionIndex];
      const correctAnswer = question.answers.find((ans) => ans.is_correct);
      const chosenAnswer = question.answers.find(
        (ans) => ans.text === result.chosenAnswer
      );

      return {
        questionNumber: result.questionNumber,
        question: question.question,
        correctAnswer: correctAnswer.text,
        chosenAnswer: chosenAnswer ? chosenAnswer.text : null,
        isCorrect: result.isCorrect,
      };
    });

    res.status(200).json({ success: true, score, results });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something Went Wrong" });
  }
};

module.exports = getQuizResults;
