const User = require('../models/user.model');

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
    createUser: (req, res) => {
        User.create(req.body)
            .then((newUser) => res.json(newUser))
            .catch((err) => {
                console.log("Error found in createUser");
                console.log(err);
                res.json(err);
            })
    }
}