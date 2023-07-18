const mongoose = require("mongoose");
const { Schema } = mongoose;

const questionSchema = new Schema({
  question: String,
  points: Number,
  answers: [
    {
      text: String,
      is_correct: Boolean,
    },
  ],
});

const quizSchema = new Schema({
  topic: String,
  desktopImage: String,
  questions: [questionSchema],
  popularity: {
    type: Number,
    default: 0,
  }
});

const Quiz = mongoose.model("Quiz", quizSchema);
module.exports = Quiz;
