const QuizResult = require("../models/quizResultModel");

// @desc Get Quiz Results for a User and Quiz
// @route GET /api/users/:userId/quizzes/:quizId/results
// @access Private
const getQuizResults = async (req, res) => {
  const { userId, quizId } = req.params;

  try {
    const quizResult = await QuizResult.findOne({
      user: userId,
      quiz: quizId,
    }).populate("quiz");

    if (!quizResult)
      return res
        .status(404)
        .json({ success: false, message: "Quiz Result Not Found" });

    const { score, answers } = quizResult;
    const quiz = quizResult.quiz;

    const results = quiz.questions.map((question, index) => {
      const answer = answers[index];
      const correctAnswer = question.answers.find((ans) => ans.is_correct);


      const quiz = new QuizResult({
        userId: userId,
        quizId: quizId,
        results,

      })

      quiz.save()

      return {
        questionNumber: index + 1,
        question: question.question,
        correctAnswer: correctAnswer.text,
        chosenAnswer: answer ? answer.text : null,
        isCorrect: answer ? answer.is_correct : null,
      };
    });

    res.status(200).json({ success: true, score, results });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Something Went Wrong" });
  }
};

module.exports = getQuizResults;
