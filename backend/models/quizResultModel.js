const mongoose = require("mongoose");
const { Schema } = mongoose;

const answerSchema = new Schema({
  _id: {
    type: Schema.Types.ObjectId,
    auto: true, // Auto-generate ObjectId for each answer
  },
  text: {
    type: String,
    required: true,
  },
  is_chosen: {
    type: Boolean,
    required: true,
  },
  is_correct: {
    type: Boolean,
    required: true,
  },
  points: Number,
});

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
    },
    score: {
      type: Number,
      default: 0,
    },
    results: [
      {
        questionNumber: {
          type: Number,
          required: true,
        },
        question: {
          type: String,
          required: true,
        },
        answers: [answerSchema],
      },
    ],
  },
  { timestamps: true }
);

const QuizResult = mongoose.model("QuizResults", quizResultSchema);
module.exports = QuizResult;
