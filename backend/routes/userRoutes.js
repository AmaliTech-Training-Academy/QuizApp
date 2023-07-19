const express = require("express");
const { registerUser } = require("../controller/userController");
const validateRegisterUser = require("../middleware/validateUser");
const editUser = require('../controller/editUser');
const interests = require("../controller/InterestController");
const router = express.Router();

router.post("/", validateRegisterUser, registerUser)
router.patch('/photo/:id', editUser);
router.patch('/interest/:id', interests);

module.exports = router;
