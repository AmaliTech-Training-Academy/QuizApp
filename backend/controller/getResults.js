const QuizResult = require("../models/quizResultModel");
const { userModel } = require("../models/userModels");
const QuizLog = require("../models/QuizLogModel");

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

    const { _id, score, results, date } = quizResult;
    const quiz = quizResult.quizId;

    // Extract the topic and desktopImage from the quiz
    const { topic, desktopImage } = quiz;

    const user = await userModel.findById(userId);
    if (!user)
      return res
        .status(404)
        .json({ success: false, message: "User Not Found" });

    // Accessing the user name property from the user object
    const { name } = user;

    // Map the results to include the topic, desktopImage, and formatted date
    const updatedResults = results.map((result) => {
      return {
        resultId: _id,
        name: name,
        questionNumber: result.questionNumber,
        question: result.question,
        answers: result.answers,
        topic: topic,
        desktopImage: desktopImage,
        date: new Date(date).toDateString(),
      };
    });
    // await updatedResults.save()
    // Prepare the data to be saved in the QuizLog collection
    const quizLogData = {
      name: name,
      userId: userId,
      quizId: quizId,
      score: score,
      date: new Date(date).toDateString(),
      results: quizResult.results.map((result) => result._id),
    };

    // Create a new QuizLog document and save it in the database
    const quizLog = await QuizLog.create(quizLogData);

    res.status(200).json({
      success: true,
      name,
      score,
      topic,
      desktopImage,
      results: updatedResults,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Something Went Wrong" });
  }
};

module.exports = getQuizResults;
