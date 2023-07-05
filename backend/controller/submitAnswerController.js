const userModel = require("../models/userModels");
const quizModel = require("../models/quizModel");

// @desc Submitting Answer for all Questions
// @route POST /api/users/questions/answers
// @access Private
const submitAnswer = async (req, res) => {
  const { userId, quizId, answers } = req.body;

  try {
    const user = await userModel.findById(userId).populate("quizzes.quizId");
    const quiz = await quizModel.findById(quizId);

    if (!user)
      return res
        .status(404)
        .json({ success: false, message: "User not found" });

    let score = 0;
    let results = [];
    for (let i = 0; i < answers.length; i++) {
      const submittedAnswer = answers[i];
      const question = quiz.questions[i];
      const correctAnswer = question.answers.find(
        (answer) => answer.is_correct
      );

      // checking if the submitted answer matches the correct answer
      if (submittedAnswer === correctAnswer.text) {
        score += question.points;
        results.push({
          question: question.question,
          answer: submittedAnswer,
          isCorrect: true,
        });
      } else {
        results.push({
          question: question.question,
          correctAnswer: correctAnswer.text,
          isCorrect: false,
        });
      }
    }

    const existingQuiz = user.quizzes.find(
      (item) => item.quizId.toString() === quizId
    );

    if (existingQuiz) {
      // user has already taken this quiz, update the score
      existingQuiz.score = score;
    } else {
      // user is taking this quiz for the first time, adding it to the quizzes array
      user.quizzes.push({ quizId, score });
    }

    await user.save();

    // Accessing the quizzes associated with the user
    const quizzes = user.quizzes;
    res.status(200).json({ success: true, quizzes, score, results });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ success: false, message: "Error submitting answers" });
  }
};

module.exports = submitAnswer;
