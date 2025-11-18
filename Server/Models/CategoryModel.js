const db = require('../config/db');

exports.GetAllCategories = async () => {
    const [result] = await db.query('CALL GetAllCategories()');
    return result[0];
};

exports.GetCategoryById = async (id) => {
    const [result] = await db.query('CALL GetCategoryById(?)', [id]);
    return result[0];
};
exports.CreateCategory = async (categoryData) => {
    const { name, description, img } = categoryData;
    const [result] = await db.query('CALL CreateCategory(?, ?, ?)', [name, description, img]);
    return result[0];
};
exports.UpdateCategory = async (id, categoryData) => {
    const { name, description, img } = categoryData;
    const [result] = await db.query('CALL UpdateCategory(?, ?, ?, ?)', [id, name, description, img]);
    return result[0];
};

exports.DeleteCategory = async (id) => {
    const [result] = await db.query('CALL DeleteCategory(?)', [id]);
    return result[0];
};