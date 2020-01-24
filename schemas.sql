DROP DATABASE IF EXISTS bamazon_DB;
CREATE DATABASE bamazon_DB;

USE bamazon_DB;

CREATE TABLE products(
  id INT AUTO_INCREMENT NOT NULL,
  product_name VARCHAR(45) NOT NULL,
  department_name VARCHAR(45) NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  stock_quantity INT(10) NOT NULL,
  primary key(id)
);


  SELECT * FROM products;

  INSERT INTO products
    (product_name, department_name, price, stock_quantity)
  VALUES

    ("Denim pants", "Clothing", 30, 54),
    ("Perfume", "Accessories", 150, 200),
    ("Boots", "Shoes", 130, 100),
    ("Jacket", "Clothing", 30, 20),
    ("Polo Shirt", "clothing", 30, 60),
    ("Shoulder bag", "Accessories", 75, 30),
    ("Tennies", "Shoes", 60, 120),
    ("Ear rings", "Accessories", 12, 20),
    ("Portable charger", "Technology", 35, 125),
    ("Diary", 'Education', '10', '15'),
    ('Yoga pants', "clothing", 40, 50),
    ("iphone charger", "electronics", 12, 10);
