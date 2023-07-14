const QuizLog = require("../models/QuizLogModel");
const protected = require("../middleware/verifyToken");

// @desc Get Quiz Logs for a User
// @route GET /api/users/:userId/quiz-logs
// @access Private

const getQuizLogs = async (req, res) => {
  const { userId } = req.params;

  try {
    const quizLogs = await QuizLog.find({ userId: userId }).populate("quizId");
    res.status(200).json({ success: true, quizLogs });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something Went Wrong" });
  }
};
