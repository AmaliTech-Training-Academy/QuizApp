const express = require("express");
const popularity = require("../controller/popularTopic");
const router = express.Router();

router.get("/popular-topics", popularity);
module.exports = router;
