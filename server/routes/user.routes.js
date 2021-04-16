const UserController = require('../controllers/user.controller');
// const { authenticate } = require('../config/jwt.config');


module.exports = (app) => {
    app.get('/api/users/', UserController.getAllUsers);
    app.post('/api/users/', UserController.register);
    app.post('/api/users/login/', UserController.login);
    app.post('/api/users/logout/', UserController.logout);
    app.get('/api/users/:userId', UserController.getAllOpinions);
};