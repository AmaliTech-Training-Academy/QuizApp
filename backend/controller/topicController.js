const data = require('../models/dataModel')



const Topic = async(req, res) => {
    try {
        const topics = await data.find()
        res.status(200).json({ success: true, topics})
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error retrieving topics'})
    }
}

module.exports = Topic

