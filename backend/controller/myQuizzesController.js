const { userModel } = require("../models/userModels");
const quizResultModel = require("../models/quizResultModel");

// @desc Get Quizzes Taken by User
// @route GET /api/users/quizzes/:userId
// @access Private
const myQuizzes = async (req, res) => {
  const { userId } = req.params; // extracting the userId from the request parameters

  try {
    // finding the user by their userId and populate the "quizzes.quizId" fields
    const user = await userModel.findById(userId).populate({
      path: "quizzes.quizId",
      model: "Quiz",
      select: "topic desktopImage",
    });

    if (!user)
      return res
        .status(404)
        .json({ success: false, message: "User not found" });

    // mapping through the quizzes array to include the quizId, topic, and desktopImage
    const quizzes = user.quizzes.map((quiz) => {
      if (quiz.quizId) {
        return {
          quizId: quiz.quizId._id,
          topic: quiz.quizId.topic,
          image: quiz.quizId.desktopImage,
          date: quiz.date.toLocaleDateString(),
        };
      }
    });

    res.status(200).json({ success: true, quizzes });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Error retrieving quizzes taken by user",
    });
  }
};

module.exports = myQuizzes;
