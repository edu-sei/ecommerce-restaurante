const db = require('../config/db');

exports.GetAllUsers = async () => {
    const [result] = await db.query('CALL GetAllUsers()');
    return result[0];
};

exports.GetUserById = async (id) => {
    const [result] = await db.query('CALL GetUserById(?)', [id]);
    return result[0];
};

exports.GetUserByEmail = async (email) => {
    const [result] = await db.query('CALL GetUserByEmail(?)', [email]);
    return result[0];
};

exports.CreateUser = async (userData) => {
    const { name, lastname, email, password } = userData;
    const [result] = await db.query('CALL CreateUser(?, ?, ?, ?)', [name, lastname, email, password]);
    return result;
};

exports.UpdateUser = async (id, userData) => {
    const { name, lastname, email, password } = userData;
    const [result] = await db.query('CALL UpdateUser(?, ?, ?, ?, ?)', [id, name, lastname, email, password]);
    return result[0];
};

exports.DeleteUser = async (id) => {
    const [result] = await db.query('CALL DeleteUser(?)', [id]);
    return result[0];
};
