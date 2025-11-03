const CategoryModel = require('../Models/CategoryModel');

exports.GetAllCategories = async (req, res) => {
    try {
        const data = await CategoryModel.GetAllCategories();
        res.status(200).json(data);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.GetCategoryById = async (req, res) => {
    try {
        const id = req.params.id;
        const data = await CategoryModel.GetCategoryById(id);
        if (data) {
            res.status(200).json(data);
        } else {
            res.status(404).json({ message: 'Category not found' });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.CreateCategory = async (req, res) => {
    try {
        const categoryData = req.body;
        const result = await CategoryModel.CreateCategory(categoryData);
        res.status(201).json({ message: 'Category created', id: result.insertId });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.UpdateCategory = async (req, res) => {
    try {
        const id = req.params.id;
        const categoryData = req.body;
        const result = await CategoryModel.UpdateCategory(id, categoryData);
        if (result.affectedRows > 0) {
            res.status(200).json({ message: 'Category updated' });  
        } else {
            res.status(404).json({ message: 'Category not found' });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.DeleteCategory = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await CategoryModel.DeleteCategory(id);
        if (result.affectedRows > 0) {
            res.status(200).json({ message: 'Category deleted' });
        } else {
            res.status(404).json({ message: 'Category not found' });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
