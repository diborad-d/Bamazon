DROP DATABASE IF EXISTS bamazon_DB;
CREATE database bamazon_DB;

USE bamazon_DB;

CREATE TABLE products
(
  id INT NOT NULL,
  product_name VARCHAR(100) NULL,
  dept_name VARCHAR(100) NULL,
  price INT(100),
  stock_quantity VARCHAR(100),
  PRIMARY KEY (position)
);