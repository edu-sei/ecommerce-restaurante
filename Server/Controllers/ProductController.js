const ProductModel = require('../Models/ProductModel');

exports.GetAllProducts = async (req, res) => {
    try {
        const data = await ProductModel.GetAllProducts();
        res.status(200).json(data);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.GetProductById = async (req, res) => {
    try {
        const id = req.params.id;
        const data = await ProductModel.GetProductById(id);
        if (data) {
            res.status(200).json(data);
        } else {
            res.status(404).json({ message: 'Product not found' });
        }   
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.CreateProduct = async (req, res) => {
    try {
        const productData = req.body;
        const result = await ProductModel.CreateProduct(productData);
        res.status(201).json({ message: 'Product created', id: result.insertId });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.UpdateProduct = async (req, res) => {
    try {
        const id = req.params.id;
        const productData = req.body;
        const result = await ProductModel.UpdateProduct(id, productData);
        if (result.affectedRows > 0) {
            res.status(200).json({ message: 'Product updated' });
        } else {
            res.status(404).json({ message: 'Product not found' });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.DeleteProduct = async (req, res) => {
    try {
        const id = req.params.id;   
        const result = await ProductModel.DeleteProduct(id);
        if (result.affectedRows > 0) {
            res.status(200).json({ message: 'Product deleted' });
        } else {
            res.status(404).json({ message: 'Product not found' });
        }   
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

