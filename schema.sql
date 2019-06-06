DROP DATABASE IF EXISTS bamazondb;
CREATE DATABASE bamazondb;
USE bamazondb;

create table products(
item_id int auto_increment not null ,
product_name varchar(50) not null,
department_name varchar(50) not null,
price int(10) not null,
stock int(10) not null,
primary key (item_id)
);

insert into products (product_name, department_name, price, stock)
values	
("Mouse HP", "Electronics", 400, 20), 
("HardDisk", "Electronics", 1200, 100), 
("Eyedrops", "Health", 700, 50),
("Knife", "Home", 900, 80),
("Sandals", "Men", 100, 3),
("Pillow", "Home", 500, 2),
("Shorts", "Men", 200, 1),
("Aspirina", "Health", 20, 100),
("Atlas Book", "Books", 1000, 2),
("How not to sleep?", "Books", 300, 1);

