const db = require('../config/db');

exports.GetAllUsers = async () => {
    const [result] = await db.query('CALL GetAllUsers()');
    return result;
};

exports.GetUserById = async (id) => {
    const [result] = await db.query('CALL GetUserById(?)', [id]);
    return result[0];
};

exports.CreateUser = async (userData) => {
    const { name, email, password } = userData;
    const [result] = await db.query('CALL CreateUser(?, ?, ?)', [name, email, password]);
    return result;
};

exports.UpdateUser = async (id, userData) => {
    const { name, email, password } = userData;
    const [result] = await db.query('CALL UpdateUser(?, ?, ?, ?)', [id, name, email, password]);
    return result;
};

exports.DeleteUser = async (id) => {
    const [result] = await db.query('CALL DeleteUser(?)', [id]);
    return result;
};
