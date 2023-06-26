const express = require("express");
const { registerUser } = require("../controller/registerController");
const validateRegisterUser = require("../middleware/validateUser");
const { editUser } = require('../controller/editUser');
const subscribeUser = require("../controller/subscribeController");
const router = express.Router();

router.post("/", validateRegisterUser, registerUser)
router.patch('/:id', editUser);
router.post('/', subscribeUser)

module.exports = router;
