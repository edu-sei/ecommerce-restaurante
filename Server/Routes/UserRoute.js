const express = require('express');
const router = express.Router();
const UserController = require('../Controllers/UserController');
const { authenticateToken } = require('../Middleware/authMiddleware');

router.get('/', authenticateToken, UserController.GetAllUsers);

router.get('/user/:id', UserController.GetUserById);

router.get('/user/:email', UserController.GetUserByEmail);

router.post('/user', UserController.CreateUser);

router.put('/user/:id', UserController.UpdateUser);

router.delete('/user/:id', UserController.DeleteUser);

router.post('/login', UserController.Login);

module.exports = router;