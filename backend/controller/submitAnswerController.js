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

    const { topic, desktopImage } = quiz;

    const noQuestions = quiz.questions.length;
    const maxPossibleScore = noQuestions * 10; // Assuming each question is worth 10 points

    let score = 0;
    let results = [];

    for (let i = 0; i < quiz.questions.length; i++) {
      const question = quiz.questions[i];

      // Check if the user attempted this question
      const userAnswer = answers.find((ans) => ans.questionNumber === i + 1);
      const attempted = !!userAnswer;

      let points = 0;
      let chosenAnswer = null;
      let isCorrect = false;

      if (attempted) {
        const { answer } = userAnswer;
        const chosenAnswerIndex = question.answers.findIndex(
          (ans) => ans.text === answer
        );

        chosenAnswer = question.answers[chosenAnswerIndex];
        isCorrect = chosenAnswer && chosenAnswer.is_correct;
        points = isCorrect ? 10 : 0;

        // Update the score based on the points for the question
        score += points;
      }

      results.push({
        questionNumber: i + 1,
        question: question.question,
        answers: question.answers.map((ans) => {
          const isChosen =
            attempted && chosenAnswer && ans.text === chosenAnswer.text;
          return {
            text: ans.text,
            is_correct: ans.is_correct,
            is_chosen: isChosen ? true : false, // Set is_chosen to false when the user did not attempt the question
            points: isChosen ? points : 0,
          };
        }),
      });
    }

    // Scale the user's score to be out of 100
    const scaledScore = (score / maxPossibleScore) * 100;
    score = Math.min(scaledScore, 100); // Ensure the score is not greater than 100

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
        name: user.name,
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
    await quizModel.findByIdAndUpdate(_id, { $inc: { popularity: 1 } });

    res.status(200).json({
      success: true,
      quizResultId: quizResult._id,
      score: score,
      quizId: quiz._id,
      topic: topic,
      desktopImage: desktopImage,
      results: results,
    });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ success: false, message: "Error Submitting Answers" });
  }
};

module.exports = submitAnswer;
