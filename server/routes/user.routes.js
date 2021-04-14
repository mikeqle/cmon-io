const UserController = require('../controllers/user.controller');

module.exports = (app) => {
    app.get('/api/users/', UserController.getAllUsers);
    app.post('/api/users/', UserController.register);
    app.post('/api/users/login/', UserController.login);
    app.post('/api/users/logout/', UserController.logout);
};