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
const passwordUpdate = require('./routes/passwordUpdateRoutes')
const deleteRoutes = require("./routes/deleteRoutes");
const Topic = require("./routes/topicRoutes");
const { connectDB, populateDatabase } = require("./config/db");
const cookieParser = require("cookie-parser");


connectDB(); //connection to mongodb database
// populateDatabase()

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
app.use("/api/users/account", detailRoutes)
app.use("/api/users/account", passwordUpdate)
app.use("/api/users/delete", deleteRoutes);
app.use("/api/users/topic", Topic);

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
