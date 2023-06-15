const User = require("../models/registerModel")

async function editUser(req, res) {
   try {
    const { id } = req.params
    const data = req.body
    const updatedUser = await User.findByIdAndUpdate({_id: id}, data, {
        new: true,
        runValidators: true
      })
      if(!updatedUser) return res.status(404).json({success: false, message: 'User does not exist'})
      res.status(200).json({success: true, message: 'User updated successfully' })
   } catch (error) {
    res.status(500).json({success: false, message: 'Something went wrong'})
   }
}
module.exports = { editUser };
