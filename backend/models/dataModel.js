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

const topicSchema = new Schema({
  topic: String,
  questions: [questionSchema],
});

const Topic = mongoose.model("Topic", topicSchema);
module.exports = Topic;
