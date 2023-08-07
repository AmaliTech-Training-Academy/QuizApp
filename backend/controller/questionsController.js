const quizModel = require("../models/quizModel");
const shuffleArray = require("../utils/shuffleArrays");

// @desc Fetching all questions from database
// @route GET /api/users/questions?topicId=topicId
// @access Private
const questions = async (req, res) => {
  const { topicId } = req.query;

  try {
    let shuffledQuestions = req.session.shuffledQuestions;
    // console.log('req::', req.session)
    if (!shuffledQuestions) {
      const fetchedData = await quizModel.findById(topicId);
      if (!fetchedData)
        return res.status(404).json({ message: "Quiz Not found" });

      const questionsArray = fetchedData.questions || [];

      const shuffledQuestionsArray = shuffleArray([...questionsArray]);
      shuffledQuestions = shuffledQuestionsArray.map((question, index) => {
        const shuffledAnswers = shuffleArray([...question.answers]);
        // console.log('shuffAns', shuffledAnswers)
        return {
          questionNumber: index + 1,
          question: question.question,
          // answers: question.answers,
          answers: shuffledAnswers,
        };
      });

      // store the shuffledQuestions array in the user's session
      req.session.shuffledQuestions = shuffledQuestions;
      // console.log('session', req.session.shuffledQuestions)
      // req.session.quizProgress = 1; // Initialize quiz progress to the first question
    }

    const totalQuestions = shuffledQuestions.length;

    res.status(200).json({
      success: true,
      topicId,
      totalQuestions, // Add totalQuestions to the response
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
