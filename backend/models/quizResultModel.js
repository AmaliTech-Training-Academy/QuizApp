const mongoose = require("mongoose");
const { Schema } = mongoose;

const quizResultSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    quizId: {
      type: Schema.Types.ObjectId,
      ref: "Quiz",
      required: true,
    },
    score: {
      type: Number,
      default: 0,
    },
    results: [
      {
        questionNumber: {
          type: Number,
          require: true,
        },
        question: {
          type: String,
          required: true,
        },
      },
    ],
  },
  { timestamps: true }
);

const QuizResult = mongoose.model("QuizResults", quizResultSchema);
module.exports = QuizResult;
