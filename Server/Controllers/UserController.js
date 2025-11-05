const UserModel = require('../Models/UserModel');

exports.GetAllUsers = async (req, res) => {
    try {
        const data = await UserModel.GetAllUsers();
        res.status(200).json(data);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.GetUserById = async (req, res) => {
    try {
        const id = req.params.id;  
        const data = await UserModel.GetUserById(id);
        if (data) {
            res.status(200).json(data);
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }   
};

exports.CreateUser = async (req, res) => {
    try {
        const userData = req.body;
        const result = await UserModel.CreateUser(userData);
        res.status(201).json({ message: 'User created', id: result.insertId });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.UpdateUser = async (req, res) => {
    try {
        const id = req.params.id;
        const userData = req.body;
        const result = await UserModel.UpdateUser(id, userData);
        if (result.affectedRows > 0) {
            res.status(200).json({ message: 'User updated' });
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.DeleteUser = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await UserModel.DeleteUser(id);
        if (result.affectedRows > 0) {
            res.status(200).json({ message: 'User deleted' });
        } else {
            res.status(404).json({ message: 'User not found' });
        }   
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

