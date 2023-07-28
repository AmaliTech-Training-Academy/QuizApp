const mongoose = require("mongoose");
const { Schema } = mongoose;

const quizLogSchema = new Schema({
  name: {
    type: String,
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  quizId: {
    type: Schema.Types.ObjectId,
    ref: "Quiz",
  },
  score: {
    type: Number,
    default: 0,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  results: [
    {
      type: Schema.Types.ObjectId,
      ref: "QuizResult",
    },
  ],
});

const QuizLog = mongoose.model("QuizLog", quizLogSchema);
module.exports = QuizLog;
