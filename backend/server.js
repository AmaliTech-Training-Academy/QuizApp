const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
const registerRoutes = require("./routes/userRoutes");
const loginRoutes = require("./routes/loginRoutes");
const messageRoutes = require("./routes/messageRoutes");
const subscribeRoutes = require("./routes/subscribeRoutes");
const forgetPassword = require("./routes/forgetPasswordRoutes");
const resetPassword = require("./routes/resetPasswordRoutes");
const detailRoutes = require("./routes/detailRoutes");
const passwordUpdate = require("./routes/passwordUpdateRoutes");
const deleteRoutes = require("./routes/deleteRoutes");
const deleteProfile = require("./routes/deleteProfileRoutes");
const questionRoutes = require("./routes/questionRoutes");
const myQuizzes = require("./routes/myQuizzesRoutes");
const performance = require("./routes/performanceRoutes");
const recentQuiz = require("./routes/recentQuizRoutes");
const submitAnswer = require("./routes/submitAnswerRoutes");
const getResult = require("./routes/getResultsRoutes");
const Topic = require("./routes/topicRoutes");
const { connectDB } = require("./config/db");
const cookieParser = require("cookie-parser");
// const { errorHandler, notFound } = require("./middleware/errorHandler");

connectDB(); //connection to mongodb database

dotenv.config();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));

app.get("/api/users/status", (req, res) => {
  res.send("API is running  ");
});

// Routes middleware
app.use("/api/users", registerRoutes);
app.use("/api/users/login", loginRoutes);
app.use("/api/users/message", messageRoutes);
app.use("/api/users/subscribe", subscribeRoutes);
app.use("/api/users/forgetPassword", forgetPassword);
app.use("/api/users/resetPassword", resetPassword);
app.use("/api/users/account", detailRoutes);
app.use("/api/users/account", passwordUpdate);
app.use("/api/users/delete", deleteRoutes);
app.use("/api/users/delete-profile", deleteProfile);
app.use("/api/users/topics", Topic);
app.use("/api/users/questions", questionRoutes);
app.use("/api/users/questions", submitAnswer);
app.use("/api/users/quizzes", myQuizzes);
app.use("/api/users/performance", performance);
app.use("/api/users/recent-quizzes", recentQuiz);
app.use("/api/users/", getResult);

// app.use(notFound);
// app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
