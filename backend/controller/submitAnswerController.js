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
      const submittedAnswer = answers[i];
      const question = quiz.questions[i];

      // Finding the chosen answer based on the submitted answer
      const chosenAnswer = question.answers.find(
        (answer) => answer.text === submittedAnswer
      );

      const questionNumber = i + 1;

      const correctAnswer = question.answers.find(
        (answer) => answer.is_correct
      );

      // checking if the submitted answer matches the correct answer
      if (chosenAnswer && chosenAnswer.is_correct) {
        score += question?.points;
        results.push({
          questionNumber,
          question: question.question,
          answer: correctAnswer.text,
          chosenAnswer: chosenAnswer.text,
          isCorrect: true,
        });
      } else {
        results.push({
          questionNumber,
          question: question.question,
          correctAnswer: correctAnswer.text,
          chosenAnswer: chosenAnswer ? chosenAnswer.text : null,
          isCorrect: false,
        });
      }
    }

    const existingQuiz = user.quizzes.find(
      (item) => item.quizId.toString() === _id
    );

    if (existingQuiz) {
      // user has already taken this quiz, update the score
      existingQuiz.score = score;
    } else {
      // user is taking this quiz for the first time, adding it to the quizzes array
      user.quizzes.push({ quizId: _id, score });
    }

    await user.save();

    res.status(200).json({ success: true, score, results });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ success: false, message: "Error submitting answers" });
  }
};

module.exports = submitAnswer;
