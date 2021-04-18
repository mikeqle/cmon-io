const OpinionController = require('../controllers/opinion.controller');

module.exports = (app) => {
    app.get('/api/o/', OpinionController.getLatest);
    app.get('/api/o/:id', OpinionController.getOne);
    app.post('/api/o/', OpinionController.create);
    app.delete('/api/o/:id', OpinionController.concede);
};
