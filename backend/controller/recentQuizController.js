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

    // Retrieve unique recent quizzes
    const recentQuizzesSet = new Set();
    const recentQuizzes = [];
    for (let i = user.quizzes.length - 1; i >= 0; i--) {
      const quiz = user.quizzes[i];
      const { quizId, date } = quiz;
      const { topic } = quizId;
      const { image } = topic;

      if (!recentQuizzesSet.has(topic)) {
        recentQuizzesSet.add(topic);
        recentQuizzes.unshift({ topic: topic.name, image, Date: date.toDateString() });
      }

      if (recentQuizzes.length >= 5) {
        break;
      }
    }

    res.status(200).json({
      success: true,
      username: user.name,
      recentQuizzes,
    });
    console.log("recent::: ", {
      success: true,
      username: user.name,
      recentQuiz: recentQuizzes,
    });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ success: false, message: "Error Retrieving Recent Quiz" });
  }
};

module.exports = recentQuiz;
