-- Actualizar GetAllProducts para incluir img
DROP PROCEDURE IF EXISTS GetAllProducts;
DELIMITER $$
CREATE PROCEDURE GetAllProducts()
BEGIN
    SELECT 
        p.id,
        p.name,
        p.description,
        p.price,
        p.img,
        p.category_fk AS category_id,
        c.name AS category_name
    FROM Product p
    LEFT JOIN Category c ON p.category_fk = c.id
    ORDER BY p.id ASC;
END$$
DELIMITER ;

-- Actualizar GetProductById para incluir img
DROP PROCEDURE IF EXISTS GetProductById;
DELIMITER $$
CREATE PROCEDURE GetProductById(IN new_id_product INT)
BEGIN
    SELECT 
        p.id,
        p.name,
        p.description,
        p.price,
        p.img,
        p.category_fk AS category_id,
        c.name AS category_name
    FROM Product p
    LEFT JOIN Category c ON p.category_fk = c.id
    WHERE p.id = new_id_product;
END$$
DELIMITER ;