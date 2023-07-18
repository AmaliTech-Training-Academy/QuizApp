const QuizLog = require("../models/QuizLogModel");
const quizResultModel = require("../models/quizResultModel");
// @desc Get Quiz Logs for a User
// @route GET /api/users/:userId/quiz-logs
// @access Private

const getQuizLogs = async (req, res) => {
  const { userId } = req.params;

  try {
    const quizLogs = await QuizLog.find({ userId: userId }).populate("quizId");
    const passedQuizzes = await quizResultModel.find({
      userId: userId,
    //   passed: passedQuizzes >= 50 ? ,
    });
    res.status(200).json({ success: true, quizLogs });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something Went Wrong" });
  }
};

module.exports = getQuizLogs;
