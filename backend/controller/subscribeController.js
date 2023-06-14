const express = require("express");
const subscribeModel = require("../models/subscribeModel");

// @desc Register new user
// @route POST /api/subscribe
// @access Public
const subscribeUser = async (req, res) => {
  try {
    let user = await subscribeModel.findOne(req.body.email);
    if (user) {
      return res.status(400).json({
        success: false,
        message: "User already subscribed to our mail",
      });
    }

    user = await subscribeModel.create({
      email: req.body.email,
    });
    res
      .status(200)
      .json({ success: true, message: "User subscribed successfully" });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ success: false, message: "Something went wrong" });
  }
};

module.exports = subscribeUser;
