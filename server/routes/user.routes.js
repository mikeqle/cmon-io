const UserController = require('../controllers/user.controller');

module.exports = (app) => {
    app.get('/api/users/', UserController.getAllUsers);
    app.post('/api/users/', UserController.register);
};