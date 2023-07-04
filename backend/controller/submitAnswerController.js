const dataModel = require("../models/dataModel");

// @desc Submitting Answer for all Questions
// @route POST /api/users/questions/answers
// @access Private
const submitAnswer = async (req, res) => {
  const answers = req.body.answers; // user's answers
  console.log("answers:", typeof answers)

  try {
    const fetchedData = await dataModel.findOne();
    if (!fetchedData) throw new Error("No data found");

    const questionsArray = fetchedData.questions || []; // added a null check
    const totalQuestions = questionsArray.length;

    // checking if the user has completed all the questions
    if (answers.length !== totalQuestions) throw new Error("Invalid number of answers");

    let points = 0;
    let correctAnswers = []; // to store the correct answers for incorrect user answers

    // comparing user's answers with the correct answers
    for (let i = 0; i < totalQuestions; i++) {
      const currentQuestion = questionsArray[i];
      const userAnswer = answers[i];

      // checking if the answer is correct
      const isCorrect = currentQuestion.answers === userAnswer;

      // Incrementing points for correct answers
      if (isCorrect) {
        points += 10;
      } else {
        // Store the correct answer for incorrect user answers
        correctAnswers.push(currentQuestion.answers);
      }
    }

    const score = (points / (totalQuestions * 10)) * 100; // calculate the percentage score

    const passLimit = 80; // minimum percentage required to pass

    const isPassed = score >= passLimit;

    res.status(200).json({
      success: true,
      points,
      score,
      isPassed,
      correctAnswers,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ success: false, message: "Error submitting answers" });
  }
};

module.exports = submitAnswer;
