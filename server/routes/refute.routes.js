const RefuteController = require('../controllers/refute.controller');

module.exports = (app) => {
    app.post('/api/r/', RefuteController.create);
    app.get('/api/r/:opinionId', RefuteController.getAllRefutes);
};
