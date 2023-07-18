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
      const isCorrect = chosenAnswer && chosenAnswer.is_correct;

      // Calculate the points for each question
      const points = isCorrect ? 10 : 0;

      // Update the score based on the points for the question
      score += points;

      results.push({
        questionNumber,
        question: question.question,
        answers: question.answers.map((ans) => {
          return {
            text: ans.text,
            is_correct: ans.text === chosenAnswer ? true : ans.is_correct,
            is_chosen: ans.text === answer,
            points: ans.text === answer ? points : 0,
          };
        }),
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
      existingQuizResult.results = results;
      quizResult = await existingQuizResult.save();
    } else {
      // if for the first time, create new result
      quizResult = new quizResultModel({
        userId: userId,
        quizId: _id,
        score: score,
        results: results,
      });
      quizResult = await quizResult.save();
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

    // Incrementing the popularity of the quiz (topic) by 1
    await quizModel.findByIdAndUpdate(_id, { $inc: { popularity: 1 }})

    res.status(200).json({
      success: true,
      quizResultId: quizResult._id,
      score: score,
      results: results,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Error Submitting Answers" });
  }
};

module.exports = submitAnswer;
