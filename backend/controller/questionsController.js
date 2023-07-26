const quizModel = require("../models/quizModel");
const shuffleArray = require("../utils/shuffleArrays");

// @desc Fetching all questions from database
// @route GET /api/users/questions?topicId=topicId
// @access Private
const questions = async (req, res) => {
  const { topicId } = req.query;

  try {
    let shuffledQuestions = req.session.shuffledQuestions;
    console.log("shuff::", shuffledQuestions);
    console.log("req::", req.session);

    if (!shuffledQuestions) {
      const fetchedData = await quizModel.findById(topicId);
      if (!fetchedData)
        return res.status(404).json({ message: "Quiz Not found" });

      const questionsArray = fetchedData.questions || []; // Added null check for questionsArray
      shuffledQuestions = shuffleArray([...questionsArray]);

      // store the shuffledQuestions array in the user's session
      req.session.shuffledQuestions = shuffledQuestions;
      req.session.quizProgress = 1; // Initialize quiz progress to the first question
    }

    const totalQuestions = shuffledQuestions.length;

    // Fetch all the questions at once
    const allQuestions = shuffledQuestions.map((question, index) => {
      // Extracting the answer texts and ids from answers
      const extractedAnswers = question.answers.map(({ text, _id }) => ({
        text,
        _id,
      }));

      return {
        question: question.question,
        answers: extractedAnswers,
      };
    });

    res.status(200).json({
      success: true,
      topicId,
      totalQuestions,
      questions: allQuestions,
    });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ success: false, message: "Error fetching questions" });
  }
};

module.exports = questions;
