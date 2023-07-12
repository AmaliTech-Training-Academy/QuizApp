const dataModel = require("../models/quizModel");

// @desc Fetching topics without questions, points, and answers
// @route POST /api/users/topic
// @access Private
const Topic = async (req, res) => {
  try {
    const topicData = await dataModel.find();

    if (topicData.length > 0) {
      const topics = topicData.map((data) => ({
        _id: data._id,
        topic: data.topic,
        desktopImage: data.desktopImage,
      }));

      console.log({ success: true, message: topics });
      return res.status(200).json({ success: true, message: topics });
    } else {
      return res
        .status(404)
        .json({ success: false, message: "Topic Not Found" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Something went wrong" });
  }
};

module.exports = Topic;
