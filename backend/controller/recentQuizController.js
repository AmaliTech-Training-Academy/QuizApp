const { userModel } = require("../models/userModels");
const mongoose = require("mongoose");

//@desc Get Recent Quizzes Taken by User
//@route GET /api/users/:id/recent-quizzes
//@access Private
const recentQuiz = async (req, res) => {
  const { id } = req.params;

  console.log("userId::", id);
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ success: false, message: "Invalid userId" });
  }

  try {
    const user = await userModel
      .findById(id)
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
      const { quizId, score, } = quiz;
      const { topic } = quizId;
      const time = quiz.date.toDateString(); // Convert the createdAt date to a string format
      
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
    console.log("recent::: ", {
      success: true,
      username: user.name,
      recentQuiz: recentQuizData,
    });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ success: false, message: "Error Retrieving Recent Quiz" });
  }
};

module.exports = recentQuiz;
