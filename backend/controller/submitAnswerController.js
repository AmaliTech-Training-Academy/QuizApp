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
    const quiz = await quizModel.findById(_id).populate("questions.answers");

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
      } else if (!isCorrect) {
        score === 0;
      }

      results.push({
        questionNumber,
        question: question.question,
        answers: question.answers.map((ans) => ({
          text: ans.text,
          is_correct: ans.text === chosenAnswer ? true : ans.is_correct,
          is_chosen: ans.is_correct ? true : false,
        })),
        points: isCorrect ? question.points : 0,
      });
    }

    const existingQuizResult = await quizResultModel.findOne({
      userId: userId,
      quizId: _id,
    });

    let quizResult;

    if (existingQuizResult) {
      // if the user has already taken the quiz before, update existing result
      existingQuizResult.score = score;
      (existingQuizResult.results = results),
        (quizResult = await existingQuizResult.save());
    } else {
      //if for the first time, create new result
      quizResult = new quizResultModel({
        userId: userId,
        quizId: _id,
        score: score,
        results: results,
      });
      quizResult = await quizResult.save()
    }

    // update user's quiz result for the specific topic
    const userQuiz = user.quizzes.find(
      (quiz) => quiz.quizId && quiz.quizId.toString() === _id.toString()
    );
    if (userQuiz) {
      userQuiz.quizResult = quizResult._id;
    } else {
      user.quizzes.push({ quizId: _id, quizResult: quizResult._id });
    }

    await user.save();

    res.status(200).json({
      success: true,
      score,
      results: results.map((result) => ({
        questionNumber: result.questionNumber,
        question: result.question,
        answers: result.answers,
        points: result.points,
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
