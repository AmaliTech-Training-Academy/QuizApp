const { userModel } = require("../models/userModels");
const quizModel = require("../models/quizModel");

// @desc Get Quizzes Taken by User
// @route GET /api/users/quizzes/:userId
// @access Private
const myQuizzes = async (req, res) => {
  const { userId } = req.params; // extracting the userId from the request parameters

  try {
    // finding the user by their userId and populate the "quizzes.quizId" fields
    const user = await userModel.findById(userId).populate("quizzes.quizId");
    console.log(user)
    if (!user)
      return res
        .status(404)
        .json({ success: false, message: "User not found" });

    // mapping through the quizzes array to include the quizId and formatted date
    const quizzes = user.quizzes.map((quiz) => ({
      quizId: quiz.quizId._id,
      topic: quiz.quizId.topic,
      date: quiz.date.toLocaleDateString(),
    }));

    res.status(200).json({ success: true, quizzes });
    console.log(quizzes)
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Error retrieving quizzes taken by user",
    });
  }
};

module.exports = myQuizzes;
