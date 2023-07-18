const { userModel } = require("../models/userModels");
const quizModel = require("../models/quizModel");
const quizResultModel = require("../models/quizResultModel");

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

    // Get all quiz results for the user
    const quizResults = await quizResultModel
      .find({ userId: user._id })
      .populate("quizId");
    console.log("quizResults:::", quizResults);

    // Calculate the total number of attempts and correct attempts for each topic
    const topicStats = quizResults.reduce((stats, quizResult) => {
      const topic = quizResult.quizId.topic;
      console.log("topic", topic);

      // Ensure the topic is defined before proceeding
      if (topic) {
        // Initialize the totalAttempts and correctAttempts to 0 for each topic
        if (!stats[topic]) {
          stats[topic] = {
            totalAttempts: 0,
            correctAttempts: 0,
          };
        }

        // Increment the totalAttempts for the topic by 1
        stats[topic].totalAttempts += 1;

        // Iterate through the answers in the quizResult to count the correct attempts
        quizResult.results.forEach((result) => {
          if (
            result.answers.some(
              (answer) => answer.is_chosen && answer.is_correct
            )
          ) {
            stats[topic].correctAttempts += 1;
          }
        });
      }

      return stats;
    }, {});
    console.log("topicStat", topicStats);

    // Calculate the performance record percentage for each topic
    const performanceData = Object.keys(topicStats).map((topic) => {
      const totalAttempts = topicStats[topic].totalAttempts;
      const correctAttempts = topicStats[topic].correctAttempts;

      // Calculate the accuracy for the topic
      const accuracy =
        totalAttempts === 0
          ? "0%"
          : ((correctAttempts / totalAttempts) * 100).toFixed(1) + "%";

          console.log("accuracy::", accuracy)

      return {
        topic,
        totalAttempts,
        correctAttempts,
        accuracy,
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
