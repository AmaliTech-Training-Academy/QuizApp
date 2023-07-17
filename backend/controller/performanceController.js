const { userModel } = require("../models/userModels");
const quizModel = require("../models/quizModel");

// @desc Get Performance Records and Statistics
// @route GET /api/users/performance/:userId
// @access Private
const performance = async (req, res) => {
  const { userId } = req.params;

  try {
    const user = await userModel.findById(userId).populate({
      path: "quizzes.quizId",
      model: quizModel,
      select: "topic desktopImage",
    });

    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User Not Found" });
    }

    // Calculate the total number of attempts and correct attempts for each topic
    const topicStats = user.quizzes.reduce((stats, quiz) => {
      const topic = quiz.quizId.topic;
      const totalAttempts = stats[topic]?.totalAttempts || 0;
      const correctAttempts = stats[topic]?.correctAttempts || 0;

      stats[topic] = {
        totalAttempts: totalAttempts + 1,
        correctAttempts: correctAttempts + quiz.score,
      };

      return stats;
    }, {});

    // ... (previous code)

// Calculate the performance record percentage for each topic
const performanceData = Object.keys(topicStats).map((topic) => {
    const totalAttempts = topicStats[topic].totalAttempts;
    const correctAttempts = parseFloat(topicStats[topic].correctAttempts);
  
    // Handle the case when totalAttempts is 0 to avoid division by zero
    const accuracy = totalAttempts === 0 ? "0%" : ((correctAttempts / totalAttempts) * 100).toFixed(1) + "%";
  
    // Calculate the popularity statistics
    const popularityStats = {
      totalUsers: totalAttempts, // Total number of users who attempted the topic
      passRate: totalAttempts === 0 ? 0 : (correctAttempts / totalAttempts) * 100, // Pass rate of users for the topic
    };
  
    // Get the most taken quiz
    const mostTakenQuiz = user.quizzes.reduce((mostTaken, quiz) => {
      if (!mostTaken || quiz.quizId.totalAttempts > mostTaken.totalAttempts) {
        return {
          quizId: quiz.quizId._id,
          desktopImage: quiz.quizId.desktopImage,
          totalAttempts: quiz.quizId.totalAttempts,
        };
      }
      return mostTaken;
    }, null);
  
    return {
      topic,
      totalAttempts,
      correctAttempts,
      accuracy,
      popularityStats,
      quizId: mostTakenQuiz.quizId,
      desktopImage: mostTakenQuiz.desktopImage,
    };
  }); 

    // Sort performanceData in descending order based on totalAttempts
    performanceData.sort((a, b) => b.totalAttempts - a.totalAttempts);

    res.status(200).json({ success: true, performanceData });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ success: false, message: "Error Retrieving Performance Data" });
  }
};

module.exports = performance;
