const express = require('express');
const router = express.Router();
const UserController = require('../Controllers/UserController');

router.get('/', UserController.GetAllUsers);

router.get('/user/:id', UserController.GetUserById);

router.post('/user', UserController.CreateUser);

router.put('/user/:id', UserController.UpdateUser);

router.delete('/user/:id', UserController.DeleteUser);


module.exports = router;