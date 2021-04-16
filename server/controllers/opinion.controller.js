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
                console.log("Error found in createOpinion");
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
                console.log("Error found in createOpinion");
                console.log(err);
                res.json(err);
            })
    }
};