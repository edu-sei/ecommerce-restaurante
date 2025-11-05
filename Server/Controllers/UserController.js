const UserModel = require('../Models/UserModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

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

exports.GetUserByEmail = async (req, res) => {
    try {
        const email = req.params.email;  
        const data = await UserModel.GetUserByEmail(email);
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
        console.log('Creating user with data:', userData);
        
        if (userData.password) {
            userData.password = await bcrypt.hash(userData.password, 10);
        }
        
        const result = await UserModel.CreateUser(userData);
        console.log('User creation result:', result);
        
        if (result && result.affectedRows > 0) {
            res.status(201).json({ message: 'User created successfully' });
        } else {
            res.status(400).json({ message: 'Failed to create user' });
        }
    } catch (err) {
        console.error('Error creating user:', err);
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

exports.Login = async (req, res) => {
    try {
        const { email, password } = req.body;
        console.log('Login attempt:', { email, password });
        
        const userResult = await UserModel.GetUserByEmail(email);
        const user = userResult && userResult.length > 0 ? userResult[0] : null;
        console.log('User found:', user ? { id: user.id, email: user.email, password: user.password } : 'No user');
        console.log(user);
        
        if (!user) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        let isValidPassword = false;
        
        // Verificar si la contraseña está hasheada o es texto plano
        if (user.password && user.password.startsWith('$2b$')) {
            console.log('Using bcrypt comparison');
            isValidPassword = await bcrypt.compare(password, user.password);
        } else {
            console.log('Using plain text comparison');
            isValidPassword = password === user.password;
        }
        
        console.log('Password valid:', isValidPassword);
        
        if (!isValidPassword) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        const token = jwt.sign(
            { id: user.id_user, email: user.email },
            process.env.JWT_SECRET || 'your-secret-key',
            { expiresIn: '24h' }
        );

        res.status(200).json({
            message: 'Login successful',
            token,
            user: { id: user.id_user, name: user.name, email: user.email }
        });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

