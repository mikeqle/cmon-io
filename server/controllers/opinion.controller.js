const Opinion = require('../models/opinion.model');

module.exports = {
    getLatestOpinions: (req,res) => {
        Opinion.find().limit(20)
            .then((latestOpinions) => res.json(latestOpinions))
            .catch((err) => {
                console.log("Error found in createOpinion");
                console.log(err);
                res.json(err);
            });
    },

    createOpinion: (req, res) => {
        Opinion.create(req.body)
            .then((newOpinion) => res.json(newOpinion))
            .catch((err) => {
                // console.log("Error found in createOpinion");
                console.log(err);
                res.json(err);
            });
    }
};