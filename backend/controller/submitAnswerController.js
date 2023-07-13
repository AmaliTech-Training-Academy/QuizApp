const { userModel } = require("../models/userModels");
const quizModel = require("../models/quizModel");
const quizResultModel = require("../models/quizResultModel");

// @desc Submitting Answer for all Questions
// @route POST /api/users/questions/answers
// @access Private
const submitAnswer = async (req, res) => {
  const { userId, quizId: _id, answers } = req.body;

  try {
    const user = await userModel.findById(userId).populate("quizzes.quizId");
    const quiz = await quizModel.findById(_id);

    if (!user)
      return res
        .status(404)
        .json({ success: false, message: "User Not Found" });

    let score = 0;
    let results = [];

    for (let i = 0; i < answers.length; i++) {
      const { answer, questionNumber } = answers[i];
      const questionIndex = questionNumber - 1; // Subtract 1 to get the correct index

      const question = quiz.questions[questionIndex];

      const chosenAnswer = question.answers.find((ans) => ans.text === answer);
      const correctAnswer = question.answers.find((ans) => ans.is_correct);

      const isCorrect = chosenAnswer && chosenAnswer.is_correct;

      // Update the score if the answer is correct
      if (isCorrect) {
        score += question.points;
      }

      results.push({
        questionNumber,
        question: question.question,
        correctAnswer: correctAnswer.text,
        chosenAnswer: chosenAnswer ? chosenAnswer.text : null,
        isCorrect: isCorrect,
      });
    }

    const quizResult = new quizResultModel({
      userId: userId,
      quizId: quiz._id,
      score: score,
      results: results,
    });

    await quizResult.save();

    res.status(200).json({
      success: true,
      score,
      results: results.map((result) => ({
        questionNumber: result.questionNumber,
        question: result.question,
        correctAnswer: result.correctAnswer,
        chosenAnswer: result.chosenAnswer,
        isCorrect: result.isCorrect,
      })),
    });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ success: false, message: "Error Submitting Answers" });
  }
};

module.exports = submitAnswer;
