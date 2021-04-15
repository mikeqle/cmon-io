const User = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const jwt_secret = process.env.SECRET_KEY;


module.exports = {
    getAllUsers: (req, res) => {
        User.find({})
            .then((allUsers) => res.json(allUsers))
            .catch((err) => {
                console.log("Error found in getAllUsers");
                console.log(err);
                res.json(err);
            })
    },

    register: (req, res) => {
        User.create(req.body)
            .then((newUser) => res.json(newUser))
            .catch((err) => {
                console.log("Error found in createUser");
                console.log(err);
                res.json(err);
            })
    },

    login: async(req, res) => {
        const user = await User.findOne({ username: req.body.username });

        // handle if username not found
        if(user === null) {
            return res.sendStatus(400);
        };

        const correctPassword = await bcrypt.compare(req.body.password, user.password);
        
        // handle if password does not match
        if(!correctPassword) {
            return res.sendStatus(400);
        };

        // if we make it this far, user & password is correct
        const userToken = jwt.sign({
            id: user._id
        }, jwt_secret);

        res
            .cookie("usertoken", userToken, {
                httpOnly: true
            })
            .json({msg: "login successful!"});
    },
    
    logout: (req, res) => {
        res.clearCookie('usertoken');
        res.sendStatus(200);
    },
}