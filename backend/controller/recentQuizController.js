const { userModel } = require("../models/userModels");

//@desc Get Recent Quizzes Taken by User
//@route GET /api/users/:userId/recent-quizzes
//@access Private
const recentQuiz = async (req, res) => {
  const { userId } = req.params;

  try {
    const user = await userModel
      .findById(userId)
      .populate("quizzes.quizId")
      .select("name quizzes");

    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User Not Found" });
    }

    // Retrieving recent quizzes
    const recentQuizzes = user.quizzes.slice(-5);

    // Extracting necessary data from recent quizzes
    const recentQuizData = recentQuizzes.map((quiz) => {
      const { quizId, score, createdAt } = quiz;
      const { topic } = quizId;
      const time = createdAt.toLocaleString(); // Convert the createdAt date to a string format

      return {
        topic,
        score,
        time,
      };
    });

    res.status(200).json({
      success: true,
      username: user.name,
      recentQuizzes: recentQuizData,
    });
    console.log("recent::: ", { success: true, username: user.name, recentQuiz: recentQuizzes });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ success: false, message: "Error Retrieving Recent Quiz" });
  }
};

module.exports = recentQuiz;
