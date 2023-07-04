const quizModel = require("../models/quizModel");

// @desc Fetching Question from database
// @route GET /api/users/questions?topicId=topicId&page=1&limit=5
// @access Private
const questions = async (req, res) => {
  const topicId = req.query.topicId;
  const page = parseInt(req.query.page) || 1; // current page number
  console.log(page);
  const limit = 5; // Number of items per page

  try {
    const fetchedData = await quizModel.findOne({ _id: topicId });
    if (!fetchedData) throw new Error("Topic not found");

    const questionsArray = fetchedData.questions || []; // Added null check for questionsArray
    const totalQuestions = questionsArray.length;

    // checking if the requested page is not a valid number
    if (isNaN(page)) throw new Error("Invalid page number");

    // checking if the requested page is out of bounds
    if (page < 1 || page > totalQuestions)
      throw new Error("Page number out of bounds");

    // Fetching the current question
    const currentQuestion = questionsArray[page - 1];
    const response = {
      success: true,
      topicId,
      page,
      limit,
      totalQuestions,
      question: currentQuestion.question,
      answers: currentQuestion.answers,
    };
    res.status(200).json(response);
    console.log(response);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ success: false, message: "Error fetching question" });
  }
};

module.exports = questions;
