const data = require('../models/dataModel')


// @desc Register new user
// @route POST /api/topic
// @access Public
const Topic = async(req, res) => {
    try {
        const topics = await data.find()
        res.status(200).json({ success: true, topics})
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error retrieving topics'})
    }
}

module.exports = Topic

