const OpinionController = require('../controllers/opinion.controller');

module.exports = (app) => {
    app.get('/api/o/', OpinionController.getLatestOpinions);
    app.post('/api/o/', OpinionController.createOpinion);
};
