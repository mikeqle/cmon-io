const Refute = require('../models/refute.model');

module.exports = {
    // getting all refutes of a certain opinion
    getAllRefutes: (req,res) => {
        Refute.find({opinionId: req.params.opinionId})
            .then((allRefutes) => res.json(allRefutes))
            .catch((err) => {
                console.log("Error found in getAll");
                console.log(err);
                res.json(err);
            });
    },

    create: (req, res) => {
        Refute.create(req.body)
            .then((newRefute) => res.json(newRefute))
            .catch((err) => {
                console.log("Error found in create");
                console.log(err);
                res.json(err);
            });
    }
}