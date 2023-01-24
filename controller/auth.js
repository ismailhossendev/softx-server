const employeeModel = require('../models/employee')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { options } = require('../routes/employee')



const login = async (req, res) => {
    const { username, password } = req.body;
    const user = await employeeModel.findOne({ username: username })
    if (user) {
        const HashedPassword = user.password;
        const compare = await bcrypt.compare(password, HashedPassword)


        if (compare) {
            res.json({
                success: true,
                message: "Login Success",
                token: jwt.sign({
                    username: username,
                    userId: user._id
                }, process.env.JWT_HEX)
            })
        } else {
            res.json("Authentication Error!")

        }
    } else {
        res.json("Authentication Error!")
    }
}

module.exports = login;