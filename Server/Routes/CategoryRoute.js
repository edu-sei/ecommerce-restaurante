const express = require('express');
const router = express.Router();
const CategoryController = require('../Controllers/CategoryController');

/**
 * @swagger
 * /api/Category:
 *   get:
 *     summary: Obtener todas las categorías
 *     tags: [Categories]
 *     responses:
 *       200:
 *         description: Lista de categorías
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Category'
 */
router.get('/', CategoryController.GetAllCategories);

/**
 * @swagger
 * /api/Category/category/{id}:
 *   get:
 *     summary: Obtener categoría por ID
 *     tags: [Categories]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Categoría encontrada
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Category'
 */
router.get('/category/:id', CategoryController.GetCategoryById);

/**
 * @swagger
 * /api/Category/category:
 *   post:
 *     summary: Crear nueva categoría
 *     tags: [Categories]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *               img:
 *                 type: string
 *     responses:
 *       201:
 *         description: Categoría creada
 */
router.post('/category', CategoryController.CreateCategory);

/**
 * @swagger
 * /api/Category/category/{id}:
 *   put:
 *     summary: Actualizar categoría
 *     tags: [Categories]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *               img:
 *                 type: string
 *     responses:
 *       200:
 *         description: Categoría actualizada
 */
router.put('/category/:id', CategoryController.UpdateCategory);

/**
 * @swagger
 * /api/Category/category/{id}:
 *   delete:
 *     summary: Eliminar categoría
 *     tags: [Categories]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Categoría eliminada
 */
router.delete('/category/:id', CategoryController.DeleteCategory);

module.exports = router;