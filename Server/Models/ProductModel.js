const db = require('../config/db');

exports.GetAllProducts = async () => {
    const [result] = await db.query('CALL GetAllProducts()');
    return result[0];
};

exports.GetProductById = async (id) => {
    const [result] = await db.query('CALL GetProductById(?)', [id]);
    return result[0];
};

exports.CreateProduct = async (productData) => {
    const { category, name, description, price } = productData;
    const [result] = await db.query('CALL CreateProduct(?, ?, ?, ?)', [category, name, description, price]);
    return result[0];
};

exports.UpdateProduct = async (id, productData) => {
    const { category, name, description, price } = productData;
    const [result] = await db.query('CALL UpdateProduct(?, ?, ?, ?, ?)', [id, category, name, description, price]);
    return result[0];
};

exports.DeleteProduct = async (id) => { 
    const [result] = await db.query('CALL DeleteProduct(?)', [id]);
    return result[0];
};
