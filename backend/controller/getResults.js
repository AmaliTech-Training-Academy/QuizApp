const { userModel } = require("../models/userModels");
const quizModel = require("../models/quizModel");

// @desc Get Quiz Results for a User and Topic
// @route GET /api/users/:userId/quizzes/:quizId/results
// @access Private
const getQuizResults = async (req, res) => {
  const { userId, quizId } = req.params;

  try {
    const user = await userModel.findById(userId).populate("quizzes.quizId");
    console.log("user::", user)
    const quizResult = user.quizzes.find((item) => item._id.toString() === quizId);
    console.log("result::", quizResult)

    if (!user || !quizResult) {
      return res.status(404).json({ success: false, message: "User or Quiz Result Not Found" });
    }

    const quiz = quizResult.quizId;

    const { score } = quizResult;

    const results = quiz.questions.map((question, index) => {
      const answer = quizResult.answers[index];
      const correctAnswer = question.answers.find((ans) => ans.is_correct);

      return {
        questionNumber: index + 1,
        question: question.question,
        correctAnswer: correctAnswer.text,
        chosenAnswer: answer ? answer.text : null,
        isCorrect: answer ? answer.is_correct : null,
      };
    });

    res.status(200).json({ success: true, score, results });
    console.log({ success: true, score, results });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something Went Wrong" });
  }
};

module.exports = getQuizResults;
