const { userModel } = require("../models/userModels");
const quizModel = require("../models/quizModel");

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
        .json({ success: false, message: "User not found" });

    let score = 0;
    let results = [];

    for (let i = 0; i < answers.length; i++) {
      const { selectedAnswer, questionNumber } = answers[i];
      const question = quiz.questions[i];

      const chosenAnswer = question.answers.find(
        (answer) => answer.text === selectedAnswer
      );

      const correctAnswer = question.answers.find(
        (answer) => answer.is_correct
      );

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
        isCorrect,
      });
    }

    const existingQuizIndex = user.quizzes.findIndex(
      (item) => item.quizId.toString() === _id
    );

    if (existingQuizIndex !== -1) {
      // User has already taken this quiz, update the score and answers
      user.quizzes[existingQuizIndex].score = score;
      user.quizzes[existingQuizIndex].answers = results;
    } else {
      // User is taking this quiz for the first time, adding it to the quizzes array
      user.quizzes.push({ quizId: _id, score, answers: results });
    }

    await user.save();

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
      .json({ success: false, message: "Error submitting answers" });
  }
};

module.exports = submitAnswer;
