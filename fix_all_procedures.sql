-- Actualizar CreateProduct para incluir img
DROP PROCEDURE IF EXISTS CreateProduct;
DELIMITER $$
CREATE PROCEDURE CreateProduct(
    IN new_category_fk INT,
    IN new_name VARCHAR(100),
    IN new_description VARCHAR(255),
    IN new_price DECIMAL(10,2),
    IN new_img VARCHAR(255)
)
BEGIN
    INSERT INTO Product (category_fk, name, description, price, img)
    VALUES (new_category_fk, new_name, new_description, new_price, new_img);
END$$
DELIMITER ;

-- Actualizar UpdateProduct para incluir img
DROP PROCEDURE IF EXISTS UpdateProduct;
DELIMITER $$
CREATE PROCEDURE UpdateProduct(
    IN new_id_product INT,
    IN new_category_fk INT,
    IN new_name VARCHAR(100),
    IN new_description VARCHAR(255),
    IN new_price DECIMAL(10,2),
    IN new_img VARCHAR(255)
)
BEGIN
    UPDATE Product
    SET 
        category_fk = new_category_fk,
        name = new_name,
        description = new_description,
        price = new_price,
        img = new_img
    WHERE id = new_id_product;
END$$
DELIMITER ;

-- Actualizar CreateCategory para incluir img
DROP PROCEDURE IF EXISTS CreateCategory;
DELIMITER $$
CREATE PROCEDURE CreateCategory(
    IN new_name VARCHAR(100),
    IN new_description VARCHAR(255),
    IN new_img VARCHAR(255)
)
BEGIN
    INSERT INTO Category (name, description, img)
    VALUES (new_name, new_description, new_img);
END$$
DELIMITER ;

-- Actualizar UpdateCategory para incluir img
DROP PROCEDURE IF EXISTS UpdateCategory;
DELIMITER $$
CREATE PROCEDURE UpdateCategory(
    IN new_id_category INT,
    IN new_name VARCHAR(100),
    IN new_description VARCHAR(255),
    IN new_img VARCHAR(255)
)
BEGIN
    UPDATE Category
    SET name = new_name,
        description = new_description,
        img = new_img
    WHERE id = new_id_category;
END$$
DELIMITER ;

-- Actualizar GetCategoryById para incluir img
DROP PROCEDURE IF EXISTS GetCategoryById;
DELIMITER $$
CREATE PROCEDURE GetCategoryById(
    IN new_id_category INT
)
BEGIN
    SELECT id, name, description, img
    FROM Category
    WHERE id = new_id_category;
END$$
DELIMITER ;