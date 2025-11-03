const db = require('../config/db');

exports.GetAllCategories = async () => {
    const [result] = await db.query('CALL GetAllCategories()');
    return result;
};

exports.GetCategoryById = async (id) => {
    const [result] = await db.query('CALL GetCategoryById(?)', [id]);
    return result[0];
};
exports.CreateCategory = async (categoryData) => {
    const { name, description } = categoryData;
    const [result] = await db.query('CALL CreateCategory(?, ?)', [name, description]);
    return result;
};
exports.UpdateCategory = async (id, categoryData) => {
    const { name, description } = categoryData;
    const [result] = await db.query('CALL UpdateCategory(?, ?, ?)', [id, name, description]);
    return result;
};

exports.DeleteCategory = async (id) => {
    const [result] = await db.query('CALL DeleteCategory(?)', [id]);
    return result;
};