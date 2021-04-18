const Opinion = require('../models/opinion.model');

module.exports = {
    getLatest: (req,res) => {
        Opinion.find().limit(20)
            .then((latestOpinions) => res.json(latestOpinions))
            .catch((err) => {
                console.log("Error found in getLatest");
                console.log(err);
                res.json(err);
            });
    },

    getOne: (req, res) => {
        Opinion.findOne({ _id: req.params.id })
            .then((oneOpinion) => res.json(oneOpinion))
            .catch((err) => {
                console.log("Error found in getOne");
                console.log(err);
                res.json(err);
            })
    },

    create: (req, res) => {
        Opinion.create(req.body)
            .then((newOpinion) => res.json(newOpinion))
            .catch((err) => {
                console.log("Error found in create");
                console.log(err);
                res.json(err);
            });
    },
    
    concede: (req, res) => {
        Opinion.findByIdAndDelete(req.params.id)
            .then((deletedOpinion) => {
                console.log("Deleting this opinion");
                console.log(deletedOpinion);
                res.json(deletedOpinion);
            })
            .catch((err) => {
                console.log("Error found in concede");
                console.log(err);
                res.json(err);
            })
    }
};