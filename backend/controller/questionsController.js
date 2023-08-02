const quizModel = require("../models/quizModel");
const shuffleArray = require("../utils/shuffleArrays");

// @desc Fetching all questions from database
// @route GET /api/users/questions?topicId=topicId
// @access Private
const questions = async (req, res) => {
  const { topicId } = req.query;

  try {
    let shuffledQuestions = req.session.shuffledQuestions;

    if (!shuffledQuestions) {
      const fetchedData = await quizModel.findById(topicId);
      if (!fetchedData)
        return res.status(404).json({ message: "Quiz Not found" });

      const questionsArray = fetchedData.questions || [];

      // Shuffle both the questions and their answers arrays
      shuffledQuestions = questionsArray.map((question) => {
        const shuffledQuestion = shuffleArray(question.question);
        const shuffledAnswers = shuffleArray([...question.answers]);
        return {
          question: shuffledQuestion, // Include the question text in the returned object
          answers: shuffledAnswers,
        };
      });

      // store the shuffledQuestions array in the user's session
      req.session.shuffledQuestions = shuffledQuestions;
      req.session.quizProgress = 1; // Initialize quiz progress to the first question
    }

    const totalQuestions = shuffledQuestions.length;

    res.status(200).json({
      success: true,
      topicId,
      totalQuestions,
      questions: shuffledQuestions,
    });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ success: false, message: "Error fetching questions" });
  }
};

module.exports = questions;
