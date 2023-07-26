const mongoose = require("mongoose")
const { Schema } = mongoose

const quizLogSchema = new Schema({
    name: {
        type: String,
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: "User"
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
        default: Date.now
    }, 
    desktopImage: {
        type: String,
    },
    topic: {
        type: String,
    },
})

const quizLogModel = mongoose.model("QuizLog", quizLogSchema)
module.exports = quizLogModel