const QuizResult = require("../models/quizResultModel");

// @desc Get Quiz Results for a User and Quiz
// @route GET /api/users/:userId/quizzes/:quizId/results
// @access Private
const getQuizResults = async (req, res) => {
  const { userId, quizId } = req.params;

  try {
    const quizResult = await QuizResult.findOne({
      userId: userId,
      quizId: quizId,
    }).populate("quizId");

    if (!quizResult)
      return res
        .status(404)
        .json({ success: false, message: "Quiz Result Not Found" });

    const { _id, score, results } = quizResult;
    const quiz = quizResult.quizId;

    const updatedResults = results.map((result) => {
      const question = quiz.questions.find(
        (question) => question.question === result.question
      );
      const answers = question.answers.map((answer) => answer.text);

      return {
        resultId: _id,
        questionNumber: result.questionNumber,
        question: result.question,
        answers: answers,
        isCorrect: result.isCorrect,
        correctAnswer: result.correctAnswer,
        chosenAnswer: result.chosenAnswer,
      };
    });

    res.status(200).json({ success: true, score, results: updatedResults });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Something Went Wrong" });
  }
};

module.exports = getQuizResults;
