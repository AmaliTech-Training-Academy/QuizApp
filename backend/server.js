const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
const registerRoutes = require("./routes/registerRoutes");
const messageRoutes = require("./routes/messageRoutes");
const connectDB = require("./config/db");
const subscribeRoutes = require("./routes/subscribeRoutes");

connectDB() //connection to mongodb database

dotenv.config();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes middleware
app.use("/api/registerUser", registerRoutes);
app.use("/api/message", messageRoutes);
app.use("/api/subscribe", subscribeRoutes);

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
