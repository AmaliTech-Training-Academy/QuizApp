const userModel = require("../models/userModels");

// @desc Get Quizzes Taken by User
// @route GET /api/users/:userId/quizzes
// @access Private
const myQuizzes = async (req, res) => {
  const { userId } = req.params; // extracting the userId from the request parameters

  try {
    // finding the user by their userId and populate the "quizzes.quizId" fields
    const user = await userModel.findById(userId).populate("quizzes.quizId");

    if (!user)
      return res
        .status(404)
        .json({ success: false, message: "User not found" });

        // mapping through the quizzes array to include only the quizId and score
    const quizzes = user.quizzes.map((quiz) => ({
      quizId: quiz.quizId,
      score: quiz.score,
    }));
    res.status(200).json({ success: true, quizzes });
  } catch (error) {
    console.error(error)
    res.status(500).json({ success: false, message: "Error retrieving quizzes taken by user"})
  }
};

module.exports = myQuizzes
