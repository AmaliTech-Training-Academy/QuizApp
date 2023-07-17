const { default: mongoose } = require("mongoose");
const quizModel = require("../models/quizModel");

// @desc Fetching Question from database
// @route GET /api/users/questions?topicId=topicId&page=1&limit=5
// @access Private
const questions = async (req, res) => {
  const { topicId } = req.query;
  const page = parseInt(req.query.page) || 1; // current page number
  const limit = 5; // Number of items per page

  try {
    // if (!mongoose.Types.ObjectId.isValid(topicId))
    //   throw new Error("Invalid topicId");
    const fetchedData = await quizModel.findById(topicId)
    if (!fetchedData)
      return res.status(404).json({ message: "Quiz Not found" });

    const questionsArray = fetchedData.questions || []; // Added null check for questionsArray
    const totalQuestions = questionsArray.length;

    // checking if the requested page is not a valid number
    if (isNaN(page)) throw new Error("Invalid page number");

    // checking if the requested page is out of bounds
    if (page < 1 || page > totalQuestions)
      throw new Error("Page number out of bounds");

    // Fetching the current question
    const currentQuestion = questionsArray[page - 1];

    // Extracting the answer texts and ids from answers
    const extractedAnswers = currentQuestion.answers.map(({ text, _id }) => ({
      text,
      _id,
    }));

    const response = {
      success: true,
      topicId,
      page,
      limit,
      totalQuestions,
      question: currentQuestion.question,
      answers: extractedAnswers,
    };
    res.status(200).json(response);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ success: false, message: "Error fetching question" });
  }
};

module.exports = questions;
