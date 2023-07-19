// const { date } = require("joi");
const QuizLog = require("../models/QuizLogModel");
const { userModel } = require("../models/userModels");

// @desc Get Quiz Logs for a User
// @route GET /api/users/:userId/quiz-logs
// @access Private
const getQuizLogs = async (req, res) => {
  const { userId } = req.params;

  try {
    // Get the user
    const user = await userModel.find({ _id: userId });
    console.log("user", user)


    // Get all quiz logs for the user
    const quizLogs = await QuizLog.find({ userId: userId });
    console.log("logs::",quizLogs);

    // Filter and include only the quizzes the user has passed (scored >= 80)
    const passedQuizzes = await quizLogs.filter((log) => log.score >= 80);

    // Extract the required information for both passed and attempted quizzes
    const passedQuizData = passedQuizzes.map((quizLog) => {
      const quiz = quizLog; 
      // console.log("quiz", quiz.populate("User"))
      return {
        desktopImage: quiz.desktopImage,
        topic: quiz.topic,
        Date: quiz.date.toDateString(),
        // name: user.name,
      };
    });

    const attemptedQuizData = quizLogs.map((quizLog) => {
      const quiz = quizLog;
      return {
        desktopImage: quiz.desktopImage,
        topic: quiz.topic,
        Date: quiz.date.toDateString(),
        // name: user.name,
      };
    });

    res.status(200).json({
      success: true,
      passedQuizzes: passedQuizData,
      attemptedQuizzes: attemptedQuizData,
    });
    // console.log("passedData::", passedQuizData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something Went Wrong" });
  }
};

module.exports = getQuizLogs;
